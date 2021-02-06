import {SpiritualGiftsSurvey} from './spiritual-gifts-survey.js';
import {shallow, configure} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('SpiritualGiftsSurvey testing', () => {
  it('renders', () => {
    const wrapper = shallow(<SpiritualGiftsSurvey />);

    expect(wrapper.find('.spiritual-gifts-survey-wrapper')).toHaveLength(1);
  });
});