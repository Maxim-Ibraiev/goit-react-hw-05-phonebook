import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import s from './ContactList.module.scss';

export default class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    onDelateContacts: PropTypes.func,
  };

  state = {
    isShow: false,
  };

  componentDidMount() {
    this.handleShow();
  }

  componentDidUpdate(prevProps, prevState) {
    this.handleShow();
  }

  handleShow = () => {
    const { contacts } = this.props;
    const { isShow } = this.state;

    if (contacts[0] && !isShow) {
      this.setState({ isShow: true });
    }
  };

  render() {
    const { contacts, onDelateContacts } = this.props;
    const { isShow } = this.state;

    return (
      <>
        {isShow && (
          <TransitionGroup component="ul" className={s.container}>
            {contacts.map(contact => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onDelateContacts={onDelateContacts}
              />
            ))}
          </TransitionGroup>
        )}
      </>
    );
  }
}
