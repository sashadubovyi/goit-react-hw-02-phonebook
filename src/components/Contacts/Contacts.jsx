import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactsContainer,
  Title,
  InputName,
  ContactsItem,
  ContactName,
  ContactPhone,
  ButtonDelete,
} from './Contacts.styled';

class Contacts extends React.Component {
  render() {
    const {
      filter,
      handleFilterChange,
      filteredContacts,
      handleDeleteContact,
    } = this.props;

    return (
      <ContactsContainer>
        <Title>Contacts</Title>
        <InputName
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Find contact by name"
        ></InputName>
        <ul>
          {filteredContacts.length > 0 ? (
            filteredContacts.map(contact => (
              <ContactsItem key={contact.id}>
                <ContactName key={`${contact.id}-name`}>
                  {contact.name}:
                </ContactName>
                <ContactPhone
                  key={`${contact.id}-phone`}
                  href={`tel:${contact.number}`}
                >
                  {contact.number}
                </ContactPhone>
                <ButtonDelete onClick={() => handleDeleteContact(contact.id)}>
                  Delete
                </ButtonDelete>
              </ContactsItem>
            ))
          ) : (
            <ContactName>No contact found...</ContactName>
          )}
        </ul>
      </ContactsContainer>
    );
  }
}

Contacts.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  filteredContacts: PropTypes.array.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
