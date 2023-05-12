import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import { fetchContacts, selectError, selectIsLoading } from '../redux/index';
import { Loader } from '//src/components/Loader/Loader';
import ContactForm from 'components/contactForm/contactForm';
import { Filter } from '//src/components/Filter/Filter';
import { MyContactList } from '//src/components/ContactList/ContactList';

const Contacts = () => {
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContacts());
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
