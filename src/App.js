import React, { Component } from 'react';
import './App.css';
import Field from './components/Field';

class App extends Component {
  puppets = [
    {
      name: 'Steal',
      order: 0,
    },
    {
      name: 'Seal',
      order: 1,
    },
    {
      name: 'Copy',
      order: 2,
    },
    {
      name: 'Stack',
      order: 3,
    },
    {
      name: 'Change',
      order: 4,
    },
    {
      name: 'With',
      order: 5,
    },
    {
      name: 'Plus_Minus',
      order: 6,
    },
    {
      name: 'Between',
      order: 7,
    },
    {
      name: 'Dive',
      order: 8,
    },
    {
      name: 'Reset',
      order: 9,
    },
  ];

  render() {
    return (
      <Field puppets={this.puppets} />
    );
  }
}

export default App;
