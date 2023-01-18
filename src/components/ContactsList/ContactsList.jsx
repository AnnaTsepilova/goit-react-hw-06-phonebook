import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  ContactsListContainer,
  ContactsItem,
  Text,
} from 'components/ContactsList/ContactsList.slyled';
import { DeleteButton } from 'components/ContactForm/ContactForm.styled';

const getVisibleContacts = (contacts, searchQuery) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export default function ContactsList({ onDelete }) {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const visibleContacts = getVisibleContacts(contacts, filter.filter);

  return (
    <ContactsListContainer>
      {visibleContacts.length ? (
        visibleContacts.map(contact => {
          return (
            <ContactsItem key={contact.id}>
              <Text>
                {contact.name}: {contact.number}
              </Text>
              <DeleteButton
                type="button"
                onClick={() => {
                  onDelete(contact.id);
                }}
              >
                Delete
              </DeleteButton>
            </ContactsItem>
          );
        })
      ) : (
        <Text>There is no contact in your phonebook</Text>
      )}
    </ContactsListContainer>
  );
}

ContactsList.propTypes = {
  onDelete: PropTypes.func.isRequired,
};
