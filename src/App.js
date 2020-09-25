import React, { Component } from 'react';
import './App.css';
import StudentCard from './StudentCard.js'
import Form from './Form.js'


class App extends Component {

  constructor() {
    super();
    this.state = {
      // what is changing? The card names.
      
    }

  }
  render() {
    return (
      <div className="App wrapper">
        <header>
          <h1><span className="junoType">Juno College</span>Grad Directory</h1>
          <div className="formToFill">
            <Form />
          </div>
        </header>
        {/* <section className="gradForm">
          
        </section> */}
        <section className="studentProfiles">
          <StudentCard />
        </section>

      </div>
    );
  };
}

export default App;

