import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useDispatch, useSelector } from 'react-redux';

import { PhonePageWrapper, PhonebookContainer, Title } from './App.styled';

import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import Footer from 'components/Footer/Footer';

import { addContact, deleteContact } from 'redux/contactsSlice';
import { setFilterContact } from 'redux/filterSlice';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const addContactApp = payload => {
    let isContactName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(payload.name.toLowerCase())
    );
    let isContactNumber = contacts.filter(contact =>
      contact.number.toLowerCase().includes(payload.number.toLowerCase())
    );

    if (isContactName.length) {
      Notify.warning(`Name ${payload.name} is already in your contacts`, {
        background: '#eebf31',
        fontSize: '16px',
        width: '350px',
      });
      return;
    }

    if (isContactNumber.length) {
      Notify.warning(`Number ${payload.number} is already in your contacts`, {
        background: '#eebf31',
        fontSize: '16px',
        width: '350px',
      });
      return;
    }

    dispatch(addContact(payload));
  };

  const contactDeleteHandler = contactId => {
    Notify.success('Contact is deleted', {
      fontSize: '16px',
      width: '350px',
    });
    dispatch(deleteContact(contactId));
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <PhonePageWrapper>
        <PhonebookContainer>
          <Title>Phonebook</Title>
          <ContactForm onSubmit={payload => addContactApp(payload)} />
          <Section title="Contacts"></Section>
          <Filter
            filterByName={payload => dispatch(setFilterContact(payload))}
          />
          <ContactsList onDelete={payload => contactDeleteHandler(payload)} />
        </PhonebookContainer>
      </PhonePageWrapper>
      <Footer />
    </>
  );
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  contactDeleteHandler: PropTypes.func,
  formSubmitHandler: PropTypes.func,
  handleFilter: PropTypes.func,
  getFilteredContacts: PropTypes.func,
};
