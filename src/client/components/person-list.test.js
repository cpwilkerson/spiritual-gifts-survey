import {PersonList} from './person-list.js';
import {shallow, configure} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('PersonList testing', () => {
  it('renders', () => {
    const wrapper = shallow(<PersonList persons={[{
      name: 'Mickey Mouse',
      age: 100
    }]}/>);

    expect(wrapper.find('.person-list-wrapper')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(1);
  });
});