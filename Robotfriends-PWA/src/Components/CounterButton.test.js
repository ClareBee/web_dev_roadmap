import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

describe('counter button', () => {
  it('expects counter button list to render', () => {
    const mockColour = 'red';
    expect(shallow(<CounterButton colour={mockColour} />)).toMatchSnapshot();
  });

  it('correctly increments the counter', () => {
    const mockColour = 'red';
    const wrapper = shallow(<CounterButton colour={mockColour} />);
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 1 });
    expect(wrapper.props().colour).toEqual('red');
  })
});
