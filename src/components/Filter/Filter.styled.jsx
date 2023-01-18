import styled from 'styled-components';

import { ContactInput } from 'components/ContactForm/ContactForm.styled';

export const FilterContainer = styled.div`
  margin-bottom: ${props => props.theme.space[5]}px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const FilterContactInputr = styled(ContactInput)`
  &:focus {
    border: 1px solid #eebf31;
  }
`;
