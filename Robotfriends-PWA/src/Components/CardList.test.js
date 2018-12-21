import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expects card list to render', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Bob',
      username: 'Bobby',
      email: 'bob@example.com'
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
