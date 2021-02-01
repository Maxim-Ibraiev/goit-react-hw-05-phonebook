import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import s from './ContactList.module.scss';
// import fadeStyles from './fadeContactItem.module.scss';

export default function ContactList({ contacts, filter, onDelateContacts }) {
  return (
    <>
      {contacts[0] && (
        <TransitionGroup component="ul" className={s.container}>
          {contacts.map(contact => (
            // <CSSTransition
            //   timeout={250}
            //   unmountOnExit
            //   classNames={fadeStyles}
            // >
            <ContactItem
              key={contact.id}
              contact={contact}
              filter={filter}
              onDelateContacts={onDelateContacts}
            />
            // </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </>
  );
}

ContactList.defaultProps = {
  filter: '',
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onDelateContacts: PropTypes.func,
};
