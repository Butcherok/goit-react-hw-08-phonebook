import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectFiltredContacts } from '../../redux/index';
import ContactItem from '../Contact/Contact';
import {
	ContactDeleteBtn,
	ContactsItem,
	ContactsList,
} from './ContactList.styled';

export const MyContactList = () => {
	const filtredContacts = useSelector(selectFiltredContacts);
	const dispatch = useDispatch();

	return (
		<ContactsList>
			{filtredContacts.map(({ id, name, phone }) => {
				return (
					<ContactsItem key={id}>
						<ContactItem name={name} phone={phone} />
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