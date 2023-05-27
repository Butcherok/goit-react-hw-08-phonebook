import { Box } from '@mui/material';
// import { Loader } from 'components/Loader/Loader';
import ContactForm from 'components/contactForm/contactForm';
import { MyContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      {/* {isLoading && <Loader />} */}

      <section>
        <h1>Add Contact</h1>
        <ContactForm />
        <h2>Filter</h2>
        <Filter />
        <h2>Your contacts list</h2>
        <MyContactList />
      </section>
    </Box>
  );
};

export default Contacts;
