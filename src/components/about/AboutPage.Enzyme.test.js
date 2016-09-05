import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import AboutPage from './AboutPage';

function setup(saving) {

  return shallow(<AboutPage />);
}

describe('AboutPage via Enzyme', () => {
  it('should exist', () => {
    expect(AboutPage).toExist();
  });

  it('renders div, h1 and p', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('About');
    expect(wrapper.find('p').length).toBe(1);
  });
});
