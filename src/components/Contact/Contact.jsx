import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/index';

export default function ContactItem({ name, phone, id }) {
  const [deleteContacts, { isLoading }] = useDeleteContactMutation();
  // const { setContactId, setShowEditContact } = useShowModalContext();

  return (
    <>
      <p>{name}: </p>
      <p>{phone}</p>
      <button
        type="button"
        onClick={() => {
          // setContactId(id);
          // setShowEditContact(true);
        }}
      >
        edit
      </button>
      <button
        type="button"
          onClick={() => deleteContacts(id)}
          disabled={isLoading}
      >
        delete
      </button>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
