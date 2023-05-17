import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectFilter } from 'redux/index';
import ContactItem from '../Contact/Contact';
import {
  ContactDeleteBtn,
  ContactsItem,
  ContactsList,
} from './ContactList.styled';
import { useMemo } from 'react';

const MyContactList = ({ contacts }) => {
  const filter = useSelector(selectFilter);

  const filtredContacts = useMemo(
    () =>
      contacts.filter(
        contact =>
          contact.number.toLowerCase().includes(filter.toLowerCase()) ||
          contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );
  return (
    <ContactsList>
      {filtredContacts.length === 0 ? (
        <h2>You have no contacts yet!</h2>
      ) : (
        <h2>Your contacts</h2>
      )}
      {filtredContacts.map(({ id, name, phone }) => {
        return (
          <ContactsItem key={id}>
            <ContactItem name={name} phone={phone} id={id} />
            <ContactDeleteBtn type="button" onClick={() => {}}>
              Delete
            </ContactDeleteBtn>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};

MyContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
};


export { MyContactList };
