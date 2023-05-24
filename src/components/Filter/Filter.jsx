import { useDispatch, useSelector } from 'react-redux';
import { selectContactFilter } from 'redux/filter/selectors';
import { setContactFilter } from 'redux/filter/slice';
import { FilterInput, FilterLabel, Filters } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectContactFilter);
	const dispatch = useDispatch();

	return (
    <Filters>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        id="filter"
        value={filter}
        placeholder={' '}
        onChange={e => dispatch(setContactFilter(e.currentTarget.value))}
      />
    </Filters>
  );
};