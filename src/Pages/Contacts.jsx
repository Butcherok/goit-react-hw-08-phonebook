import { Box } from '@mui/material';
// import { Loader } from 'components/Loader/Loader';
import ContactForm from 'components/contactForm/contactForm';
import { Filter } from 'components/Filter/Filter';
// import { useShowModalContext } from 'components/modal/modal';

const Contacts = () => {
  // const [errors, setErrors] = useState(null)
  // const { data, isLoading, isError, isSuccess, error } =
    // useFetchContactsQuery();

  // const {
  //   showAddContact,
  //   setShowAddContact,
  //   showEditContact,
  //   setShowEditContact,
  //   contactId,
  // } = useShowModalContext();

  // useEffect(() => {
  //   if (isError && error.status !== 401)
  //     setErrors(`Something wrong. Try to reload your page! ${error.status}`);
  //     // toast.error(`Something wrong. Try to reload your page! ${error.status}`);
  // }, [error, isError]);

  // const contact = useMemo(() => {
  //   if (isSuccess) {
  //     return data.find(contact => contact.id === contactId);
  //   }
  // }, [contactId, data, isSuccess]);

  return (
    <Box>
      {/* {isLoading && <Loader />} */}

      <section>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <h2>Edit</h2>

        {/* {isSuccess && <MyContactList contacts={data} />} */}

        {/* {!isLoading && !error && <MyContactList />} */}
      </section>
    </Box>
  );
};

export default Contacts;
