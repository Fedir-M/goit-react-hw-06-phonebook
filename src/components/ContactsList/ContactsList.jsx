import { useSelector } from 'react-redux';
import {
  contactsSelector,
  filterSelector,
} from '../../redux/contactsSelectors';
import Filter from 'components/Filter';
import ContactItem from 'components/ContactItem';

import s from './ContactsList.module.css';

const ContactsList = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);

  const handleFilter = () => {
    const filterList = contacts.filter(el =>
      el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    return filterList;
  };

  const filteredList = handleFilter();

  return (
    <div>
      <h2>Contacts</h2>

      <Filter />

      <ul className={s.listWrapper}>
        {filteredList.map(el => (
          <ContactItem
            key={el.id}
            id={el.id}
            name={el.name}
            number={el.number}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
