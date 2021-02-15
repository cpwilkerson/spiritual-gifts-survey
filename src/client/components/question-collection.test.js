import {QuestionCollection} from './question-collection.js';
import {shallow, configure} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('QuestionCollection testing', () => {
  it('renders', () => {
    const wrapper = shallow(<QuestionCollection />);

    expect(wrapper.find('.question-collection-wrapper')).toHaveLength(1);
  });
});