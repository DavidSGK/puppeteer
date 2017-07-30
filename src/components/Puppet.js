import React from 'react';

class Puppet extends React.Component {
  render() {
    return (
      <div style={style} title={this.props.name} id={this.props.name} data-custom-id={this.props.order} onClick={this.props.onClick}>
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