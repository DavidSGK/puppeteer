import React, { Component } from 'react';
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

  centerView = id => {
    document.getElementById('container').scrollLeft = document.getElementById('container').offsetWidth / 2 + document.getElementById(id).offsetLeft;
    console.log(document.getElementById('container').scrollLeft)
  };

  render() {
    return (
      <div className="App">
        <div style={containerStyle} id="container">
          <Field puppets={this.puppets} centerView={this.centerView} viewMode={true} />
        </div>
      </div>
    );
  }
}

const containerStyle = {
  width: '90%',
  overflow: 'scroll',
}

export default App;
