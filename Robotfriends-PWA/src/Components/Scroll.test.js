import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

it('expects to render scroll', () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});
