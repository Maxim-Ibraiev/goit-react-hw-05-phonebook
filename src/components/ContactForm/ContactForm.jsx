import { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonSubmit from '../../components/Buttons/ButtonSubmit';
import Input from '../Input';
import Notification from '../../components/Notification';
import s from './ContactForm.module.scss';

const INITIAL_STATE = {
  name: '',
  number: '',
  isShowNotification: false,
};

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    isShowNotification: false,
  };

  static propTypes = {
    onSubmit: PropTypes.func,
    onSetContacts: PropTypes.func,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contacts } = this.props;

    if (!name || contacts.find(contact => contact.name === name)) {
      this.setState({ isShowNotification: true });

      return setTimeout(() => {
        this.setState({ isShowNotification: false });
      }, 2000);
    }

    this.props.onSetContacts(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ ...this.state, ...INITIAL_STATE });
  };

  render() {
    const { name, number, isShowNotification } = this.state;
    const NotificationText = name
      ? `${name} is already in contacts.`
      : 'Please enter the contact name.';

    return (
      <form onSubmit={this.handleSubmit} className={s.container}>
        <Notification
          in={isShowNotification}
          text={NotificationText}
          rightTransition={true}
        />

        <Input label={'Name'} value={name} onChange={this.handleChange} />
        <Input label={'Number'} value={number} onChange={this.handleChange} />

        <ButtonSubmit text={'Add contact'} />
      </form>
    );
  }
}
