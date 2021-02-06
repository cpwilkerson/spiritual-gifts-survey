import App from './app.js';
import {mount, configure} from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from '../store/configure-store';

import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App testing', () => {
  const store = configureStore({
                  persons: [{
                      name: 'Donald Duck',
                      age: 100
                    }]
                  });

  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders', () => {
    expect(wrapper.find('.app-wrapper')).toHaveLength(1);
  });

  it('post person', (done) => {
    fetch.mockResponseOnce(JSON.stringify({
                                        name: 'Pluto',
                                        age: 100,
                                        stamp: new Date()
                                      }));
    const button = wrapper.find('#btn-person-post');

    expect(button).toHaveLength(1);
    button.simulate('click');
    fetch.mockReject('no can post person');
    button.simulate('click');
    setTimeout(() => {
      expect(store.getState().error).toEqual('no can post person');
      done();
    }, 0);
  });

  it('get time', (done) => {
    fetch.mockResponseOnce(JSON.stringify({time: new Date()}));
    const timeButton = wrapper.find('.time-button-wrapper');

    expect(timeButton).toHaveLength(1);
    timeButton.simulate('click');
    fetch.mockReject('no can get time');
    timeButton.simulate('click');
    setTimeout(() => {
      expect(store.getState().error).toEqual('no can get time');
      done();
    }, 0);
  });
});