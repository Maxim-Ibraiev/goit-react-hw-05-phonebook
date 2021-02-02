import PropTypes from 'prop-types';
import ButtonDelate from '../Buttons/ButtonDelate';
import s from './ContactItem.module.scss';
import withTransitionLeftAnimation from '../../renderProp/withTransitionLeftAnimation';

function ContactItem({ contact, onDelateContacts }) {
  const { id, name, number } = contact;

  return (
    <>
      {
        <>
          <li className={s.item}>
            {`${name}: ${number}`}
            <ButtonDelate onClick={() => onDelateContacts(id)} />
          </li>
        </>
      }
    </>
  );
}

export default withTransitionLeftAnimation(ContactItem);

ContactItem.propTypes = {
  contact: PropTypes.object,
  filter: PropTypes.string,
  onDelateContacts: PropTypes.func,
};
