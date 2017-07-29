import React from 'react';

class Puppet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }

  render() {
    return (
      <div style={style} title={this.props.name} tabIndex={0}>
        {this.props.name}
      </div>
    );
  }
}

const style = {
  width: '64px',
  height: '64px',
  margin: '8px',
  lineHeight: '64px',
  fontSize: '8px',
  textAlign: 'center',
  backgroundColor: 'black',
  color: 'white',
  userSelect: 'none',
}

export default Puppet;