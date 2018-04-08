import React from 'react';
import types, { dProps } from './types';
/**
* returns prop: toggle = true || false;
* handleFalse: this.handleFalse, // always sets to false
* handleTrue: this.handleTrue, // always sets to true
* handleToggle: this.handleToggle, // toggles last value
*/
class ToggleState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
    this.handleTrue = this.handleTrue.bind(this);
    this.handleFalse = this.handleFalse.bind(this);
  }

  handleTrue() {
    this.setState({ toggle: true });
  }

  handleFalse() {
    this.setState({ toggle: false });
  }

  handleToggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    return this.props.render({
      handleFalse: this.handleFalse,
      handleTrue: this.handleTrue,
      handleToggle: this.handleToggle,
      toggle: this.state.toggle,
    });
  }
}

ToggleState.propTypes = {
  // eslint-disable-next-line react/no-typos
  render: types.render.isRequired,
};

ToggleState.defaultProps = {
  ...dProps.toggleState,
};

export default ToggleState;
