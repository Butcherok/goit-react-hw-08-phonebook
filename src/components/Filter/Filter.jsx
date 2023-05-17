import { FilterInput, FilterLabel, Filters } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/index';
import {  } from 'redux/index';

export const Filter = () => {
	const filter = useSelector(selectFilter);
	const dispatch = useDispatch();

	return (
		<Filters>
			<FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
			<FilterInput
				type="text"
				name="filter"
				id="filter"
				value={filter}
				onChange={({ currentTarget: { value } }) => dispatch()}
			/>
		</Filters>
	);
};