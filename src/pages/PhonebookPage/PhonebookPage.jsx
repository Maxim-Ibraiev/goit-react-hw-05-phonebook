import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Logo from '../../components/Logo';
import { v4 as uuIdv4 } from 'uuid';
import s from './PhonebookPage.module.scss';

export default class PhonebookPage extends Component {
  state = {
    contacts: [],
    filteredContacts: [],
    filter: '',
    test: true,
  };

  async componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));

    if (localContacts) {
      await this.setState({ contacts: localContacts });
    }

    this.handelFilteredContacts();
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts, filter } = this.state;

    localStorage.setItem('contacts', JSON.stringify(contacts));

    if (
      prevState.filter !== filter ||
      prevState.contacts.length !== contacts.length
    ) {
      return this.handelFilteredContacts();
    }
  }

  handleSetContacts = (name, number) => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const newContacts = [{ id: uuIdv4(), name, number }, ...contacts];

      return { contacts: newContacts };
    });
  };

  handleDelateContacts = id => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const updatedContacts = contacts.filter(contact => contact.id !== id);

      return { contacts: [...updatedContacts] };
    });
  };

  handelFilteredContacts = () => {
    const { contacts, filter } = this.state;

    const updateFilteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase()),
    );

    this.setState({ filteredContacts: updateFilteredContacts });
  };

  handleFilter = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { contacts, filter, filteredContacts } = this.state;

    return (
      <div className={s.container}>
        <Logo appear={true} timeout={500} />

        <ContactForm
          contacts={contacts}
          onSetContacts={(name, number) => this.handleSetContacts(name, number)}
        />

        <h2>Contacts</h2>
        {contacts.length > 0 && (
          <Filter
            filter={filter}
            onChange={this.handleFilter}
            isShow={contacts.length > 1}
          />
        )}

        <ContactList
          contacts={filteredContacts}
          filter={filter}
          onDelateContacts={id => this.handleDelateContacts(id)}
        />
      </div>
    );
  }
}
