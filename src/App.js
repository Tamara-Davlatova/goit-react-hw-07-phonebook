import Form from './Components/Form/Form';
import Contacts from './Components/ContactsList/ContactsList';
import Filter from './Components/Filter/Filter';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}
