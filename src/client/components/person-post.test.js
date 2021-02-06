import {PersonPost} from './person-post.js';
import {mount, configure} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('PersonPost testing', () => {
  it('renders', () => {
    let personPosted = false;
    const wrapper = mount(
      <PersonPost postPerson={() => {
        personPosted = true;
      }}/>
    );

    expect(wrapper.find('.person-post-wrapper')).toHaveLength(1);
    const button = wrapper.find('button'),
          personName = wrapper.find('#person-name'),
          personAge = wrapper.find('#person-age');

    expect(button).toHaveLength(1);
    expect(personName).toHaveLength(1);
    expect(personAge).toHaveLength(1);
    button.simulate('click');
    expect(personPosted).toBeTruthy();

  });
});