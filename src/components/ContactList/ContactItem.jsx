import PropTypes from 'prop-types';
import ButtonDelate from '../Buttons/ButtonDelate';
import s from './ContactItem.module.scss';
import withTransitionLeftAnimation from '../../renderProp/withTransitionLeftAnimation';

function ContactItem({ contact, filter, onDelateContacts }) {
  const { id, name, number } = contact;

  return (
    <>
      {
        <>
          <li className={s.item}>
            {`${name}: ${number}`}
            <ButtonDelate onClick={() => onDelateContacts(id)} />
          </li>
          {/* <button onClick={() => onDelateContacts(id)}>Delate</button> */}
        </>
      }
    </>
  );
}

export default withTransitionLeftAnimation(ContactItem);

ContactItem.defaultProps = {
  filter: '',
};

ContactItem.propTypes = {
  contact: PropTypes.object,
  filter: PropTypes.string,
  onDelateContacts: PropTypes.func,
};
