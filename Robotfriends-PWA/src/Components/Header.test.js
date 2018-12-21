import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('expects to render header', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});
