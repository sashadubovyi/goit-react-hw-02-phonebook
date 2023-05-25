import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  Base,
  ButtonSubmit,
  ContactName,
  ContactPhone,
  ContactsInput,
  FormContacts,
  InputName,
  PhoneBook,
  Title,
} from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();

    const { name, number } = this.state;

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

  render() {
    const { contacts, name, number } = this.state;
    return (
      <Base>
        <PhoneBook>
          <Title>Phonebook</Title>
          <FormContacts onSubmit={this.handleFormSubmit}>
            <InputName
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={this.handleChange}
              placeholder="Enter your full name"
              required
            />
            <InputName
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={this.handleChange}
              placeholder="Enter your number"
              required
            />
            <ButtonSubmit type="submit">Add contact</ButtonSubmit>
          </FormContacts>
        </PhoneBook>
        <PhoneBook>
          <Title>Contacts</Title>
          <ul>
            {contacts.map(contact => (
              <ContactsInput key={contact.id}>
                <ContactName key={`${contact.id}-name`}>
                  {contact.name}:
                </ContactName>
                <ContactPhone
                  key={`${contact.id}-phone`}
                  href="tel:{contact.number}"
                >
                  {contact.number}
                </ContactPhone>
              </ContactsInput>
            ))}
          </ul>
        </PhoneBook>
      </Base>
    );
  }
}

export default App;
