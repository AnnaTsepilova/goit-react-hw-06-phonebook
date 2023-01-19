import styled from 'styled-components';

export const ContactsListContainer = styled.ul`
  list-style-type: disc;
  padding-bottom: 2px;
  padding-left: 20px;
  padding-right: 20px;
  min-height: 180px;
`;

export const ContactsItem = styled.li`
  width: 100%;
  margin-right: ${props => props.theme.space[5]}px;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const Text = styled.span`
  margin-right: ${props => props.theme.space[5]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  font-size: 20px;
`;
