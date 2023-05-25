import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PhoneBook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import { Base } from './App.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '+380974591256' },
      { id: 'id-2', name: 'Hermione Kline', number: '+380974438912' },
      { id: 'id-3', name: 'Eden Clements', number: '+380936451779' },
      { id: 'id-4', name: 'Annie Copeland', number: '+380982279126' },
      { id: 'id-5', name: 'Alex Dubovyi', number: '+380631065900' },
      { id: 'id-6', name: 'Ambulance', number: '101' },
      { id: 'id-7', name: 'Police State', number: '102' },
      { id: 'id-8', name: 'Pamela Anderson', number: '+380634567890' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { name, number, contacts } = this.state;

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      Notify.failure('This contact already exists!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleDelete = userId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => {
          return contact.id !== userId;
        }),
      };
    });
  };

  render() {
    const { name, number, filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <Base>
        <PhoneBook
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          name={name}
          number={number}
        />
        <Contacts
          filter={filter}
          handleFilterChange={this.handleFilterChange}
          filteredContacts={filteredContacts}
          handleDelete={this.handleDelete}
        />
      </Base>
    );
  }
}

export default App;
