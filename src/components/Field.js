import React from 'react';
import Puppet from './Puppet';

class Field extends React.Component {
  constructor(props) {
    super(props);
    let defaultPositions = [this.props.puppets.slice()];
    for (let i = 0; i < 31; i++) {
      defaultPositions.push([]);
    }
    this.state = {
      activePuppet: this.props.puppets[0],
      positions: defaultPositions,
    }
  }

  selectPuppet = e => {
    this.setState({activePuppet: this.props.puppets.find(p => p.order == e.target.getAttribute('data-custom-id'))});
  };

  controls = e => {
    let toChange = this.state.positions;
    if (e.keyCode === 37) {
      for (let i = 1; i < toChange.length; i++) {
        if (toChange[i].includes(this.state.activePuppet)) {
          toChange[i].splice(toChange[i].indexOf(this.state.activePuppet), 1);
          toChange[i - 1].push(this.state.activePuppet);
          toChange[i - 1].sort((a, b) => { return a.order > b.order; });
          break;
        }
      }
    } else if (e.keyCode === 39) {
      for (let i = 0; i < toChange.length - 1; i++) {
        if (toChange[i].includes(this.state.activePuppet)) {
          toChange[i].splice(toChange[i].indexOf(this.state.activePuppet), 1);
          toChange[i + 1].push(this.state.activePuppet);
          toChange[i + 1].sort((a, b) => { return a.order > b.order; });
          break;
        }
      }
    }
    if (this.props.viewMode) this.props.centerView(this.state.activePuppet.name);
    this.setState({positions: toChange});
  };

  render() {
    return (
      <div style={style} tabIndex={0} onKeyDown={this.controls}>
        <div style={startStyle}>
          {this.state.positions[0].map(p => <Puppet name={p.name} order={p.order} key={p.order} onClick={this.selectPuppet} />)}
        </div>
        {this.state.positions.slice(1, 31).map((step, key) => (
            <div style={key % 2 === 0 ? evenStyle : stepStyle} key={key}>
              {step.map(p => <Puppet name={p.name} order={p.order} key={p.order} onClick={this.selectPuppet} />)}
            </div>
          )
        )}
        <div style={endStyle}>
          {this.state.positions[31].map(p => <Puppet name={p.name} order={p.order} key={p.order} onClick={this.selectPuppet} />)}
        </div>
      </div>
    );
  }
}

const puppetSize = 64 + 8 * 2;

const style = {
  display: 'flex',
  flexDirection: 'row',
  outline: 'none',
};

const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minWidth: '80px',
};

const startStyle = Object.assign({
  borderRight: '1px solid black',
}, columnStyle);

const endStyle = Object.assign({
  backgroundColor: 'yellow',
  borderLeft: '1px solid black',
}, columnStyle);

const stepStyle = Object.assign({
  borderLeft: '1px solid black',
  borderRight: '1px solid black',
}, columnStyle);

const evenStyle = Object.assign({
  backgroundColor : '#EEEEEE',
}, stepStyle);

export default Field;