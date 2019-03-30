import React, { Component } from "react";
import Contact from "./Contact";

export class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "0208-123-123"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "kwilliams@gmail.com",
        phone: "0208-456-456"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "hjohnson@gmail.com",
        phone: "0208-789-789"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
