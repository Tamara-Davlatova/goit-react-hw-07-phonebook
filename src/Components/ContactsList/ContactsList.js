import ContactsItem from './ContactsItem/ContactsItem';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/contacts/contacts-operations';
import {
  visibleContacts,
  getContactsLoading,
} from '../../redux/contacts/contacts-selectors';
import { useEffect } from 'react';

function Contacts() {
  const contacts = useSelector(visibleContacts);
  const isLoading = useSelector(getContactsLoading);
  const dispatch = useDispatch();
  const onDelete = contactId => dispatch(deleteContact(contactId));

  const onFetchContacts = () => dispatch(fetchContacts());

  useEffect(() => {
    onFetchContacts();
  }, []);

  return (
    <>
      {isLoading && <h1>Загружаем...</h1>}
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        ))}
      </ul>
    </>
  );
}

export default Contacts;
