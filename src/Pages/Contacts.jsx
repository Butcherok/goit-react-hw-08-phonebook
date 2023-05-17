import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import {   selectIsLoading } from 'redux/index';
import { Loader } from 'components/Loader/Loader';
import ContactForm from 'components/contactForm/contactForm';
import { Filter } from 'components/Filter/Filter';
import { MyContactList } from 'components/ContactList/ContactList';

const Contacts = () => {
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch();
		if (error) {
			alert.error(error);
		}
	}, [dispatch, error]);

	return (
		<Box>
			{isLoading && <Loader />}
			<section>
				<h1>Phonebook</h1>
				<ContactForm />
				<h2>Contacts</h2>
				<Filter />
				{!isLoading && !error && <MyContactList />}
			</section>
		</Box>
	);
};

export default Contacts;
