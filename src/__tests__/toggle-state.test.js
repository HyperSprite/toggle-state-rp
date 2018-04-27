import { shallow } from 'enzyme';
import React from 'react';
import ToggleState from '../toggle-state';

const InsideDiv = toggleStateProps => (
  <div>{toggleStateProps}</div>
);

const TestItem = (
  <ToggleState
    render={dialogStateProps => (
      <InsideDiv {...dialogStateProps} />
    )}
  />
);

describe('ToggleState state and methods', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(TestItem);
  });

  it('Renders something', () => {
    expect(wrapper.find('InsideDiv').length).toBe(1);
  });
  it('Returns "toggle" state', () => {
    expect(wrapper.state().toggle).toBe(false);
    wrapper.instance().handleTrue();
    expect(wrapper.state().toggle).toBe(true);
    wrapper.instance().handleFalse();
    expect(wrapper.state().toggle).toBe(false);
    wrapper.instance().handleToggle();
    expect(wrapper.state().toggle).toBe(true);
  });
});

describe('ToggleState Props', () => {
  const wrapper = shallow(<ToggleState initialState render={toggleStateRP => toggleStateRP} />);
  it('Accepts "initialState" as state', () => {
    expect(wrapper.state().toggle).toBe(true);
    wrapper.instance().handleToggle();
    expect(wrapper.state().toggle).toBe(false);
  });
});
