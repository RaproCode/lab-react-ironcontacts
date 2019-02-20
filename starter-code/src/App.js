import React, { Component } from "react";

import "./App.css";

import ContactList from "./components/ContactList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Iron Contacts</h1>
        </header>
        <ContactList />
      </div>
    );
  }
}

export default App;
