import {TimeButton} from './time-button.js';
import {shallow, configure} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('TimeButton testing', () => {
  it('renders', () => {
    let stamp = {};
    const wrapper = shallow(
      <TimeButton getTime={() => {
          stamp = new Date();
        }
      }/>
    );
    const timeButton = wrapper.find('.time-button-wrapper');

    expect(timeButton).toHaveLength(1);
    timeButton.simulate('click');
    expect(stamp).toBeInstanceOf(Date);
  });
});