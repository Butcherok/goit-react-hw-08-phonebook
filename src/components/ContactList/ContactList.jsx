import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../Contact/Contact';
import {
  ContactDeleteBtn,
  ContactsItem,
  ContactsList,
} from './ContactList.styled';
import { selectContacts } from 'redux/contacts/selectors';
import { selectContactFilter } from 'redux/filter/selectors';
import { deleteContact } from 'redux/contacts/operations';


const MyContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectContactFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactsList>
      {filteredContacts.length === 0 ? (
        <h2>You have no contacts yet!</h2>
      ) : (
        <h2>You have {filteredContacts.length} contacts</h2>
      )}
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <ContactItem name={name} number={number} id={id} />
            <ContactDeleteBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </ContactDeleteBtn>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};


export { MyContactList };
