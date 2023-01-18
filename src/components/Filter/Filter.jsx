import PropTypes from 'prop-types';

import {
  FilterContainer,
  FilterContactInputr,
} from 'components/Filter/Filter.styled';
import { Label } from 'components/ContactForm/ContactForm.styled';

export default function Filter({ searchQuery, filterByName }) {
  return (
    <FilterContainer>
      <Label>Find contacts by name</Label>
      <FilterContactInputr
        type="text"
        value={searchQuery}
        onChange={event => filterByName(event.target.value)}
      />
    </FilterContainer>
  );
}

Filter.propTypes = {
  filterByName: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
};
