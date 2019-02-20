import React, { Component } from "react";

import "./ContactList.css";

import contacts from "../contacts.json";

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = { contactArray: contacts.slice(0, 5) };
  }
  add() {
    const startState = this.state.contactArray;

    startState.push(contacts[Math.floor(Math.random() * contacts.length)]);
    console.log(startState);
  }

  sortName() {
    const startState = this.state.contactArray;

    startState.sort((a, b) => a.name.localeCompare(b.name)); // localeCompare is easier for sorting letters

    this.setState({ contacts: startState });
  }

  popularity() {
    const startState = this.state.contactArray;
    startState.sort((a, b) => (b.popularity > a.popularity ? 1 : -1));

    this.setState({ contacts: startState });
  }

  delete(oneContact) {
    const startState = this.state.contactArray;
    startState.splice(oneContact, 1);

    this.setState({ contacts: startState });
  }

  render() {
    const { contactArray } = this.state;
    return (
      <div className="contact">
        <button onClick={() => this.add()}>add random celeb</button>
        <button onClick={() => this.sortName()}>sort by name</button>
        <button onClick={() => this.popularity()}>sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
        </table>

        {contactArray.map(oneContact => {
          return (
            <tr key={oneContact.name} className="table">
              <td>{oneContact.name}</td>
              <td>{oneContact.popularity}</td>
              <td>
                <img src={oneContact.pictureUrl} alt="photoceleb" />
              </td>
              <th>
                <button onClick={() => this.delete(oneContact)}>Delete</button>
              </th>
            </tr>
          );
        })}
      </div>
    );
  }
}

export default ContactList;
