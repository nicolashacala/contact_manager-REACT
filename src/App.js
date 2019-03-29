import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="John Doe"
          email="jdoe@gmail.com"
          phone="028-123-123-123"
        />
        <Contact
          name="Karen Smith"
          email="ksmith@gmail.com"
          phone="028-111-111-111"
        />
      </div>
    );
  }
}

export default App;
