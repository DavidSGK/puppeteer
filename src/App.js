import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Field from './components/Field';
import Puppet from './components/Puppet';

const puppets = [
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

class App extends Component {
  render() {
    return (
      <Field puppets={puppets} />
    );
  }
}

export default App;
