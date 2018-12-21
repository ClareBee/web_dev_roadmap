import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders main page without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 1,
      name: 'Bob',
      username: 'Bobby',
      email: 'bobby@example.com'
    }],
    searchField: 'Bob',
    isPending: false
  }
  const wrapper2 = shallow(<MainPage {...mockProps2}/>)
  // instance gives access to methods
  expect(wrapper2.instance().filterRobots()).toEqual([{
    id: 1,
    name: 'Bob',
    username: 'Bobby',
    email: 'bobby@example.com'
  }]);
});

it('filters robots correctly if no match found', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 1,
      name: 'Bob',
      username: 'Bobby',
      email: 'bobby@example.com'
    }],
    searchField: 'sally',
    isPending: false
  }
  const wrapper3 = shallow(<MainPage {...mockProps3}/>)
  // instance gives access to methods
  expect(wrapper3.instance().filterRobots()).toEqual([]);
});
