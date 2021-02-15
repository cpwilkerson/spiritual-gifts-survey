import {Question} from './question.js';
import {shallow, configure} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Question testing', () => {
  it('renders', () => {
    const wrapper = shallow(<Question />);

    expect(wrapper.find('.question-wrapper')).toHaveLength(1);
  });
});