import React from 'react';
import Puppet from './Puppet';

const defaultField = Array(30).fill([]);

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      puppets: this.props.puppets,
      positions: defaultField,
    }
  }

  render() {
    return (
      <div style={style}>
        <div style={startStyle}>
          {this.state.puppets.map(p => <Puppet name={p.name} key={p.order} />)}
        </div>
        {this.state.positions.map(p => <div style={stepStyle} />)}
        <div style={endStyle}>
          
        </div>
      </div>
    );
  }
}

const style = {
  display: 'flex',
  flexDirection: 'row',
}

const startStyle = {
  width: '80px',
  height: '728px',
  borderRight: '1px solid black',
}

const endStyle = {
  width: '80px',
  height: '728px',
  borderLeft: '1px solid black',
}

const stepStyle = {
  width: '80px',
  height: '728px',
  borderLeft: '1px solid black',
  borderRight: '1px solid black',
}

export default Field;