import s from './Form.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContactsName } from '../../redux/contacts/contacts-selectors';

function Form() {
  const contactsName = useSelector(getContactsName);

  const dispatch = useDispatch();
  const onSubmit = contact => dispatch(addContact(contact));

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };

  const handleNumberChange = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contactsName.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts!`);
      setName('');
      setNumber('');
      return;
    }
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          className={s.input}
        ></input>
      </label>
      <label className={s.label}>
        Number
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleNumberChange}
          className={s.input}
        ></input>
      </label>
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}

export default Form;
