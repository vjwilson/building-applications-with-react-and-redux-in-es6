import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import HomePage from './HomePage';
import {Link} from 'react-router';

function setup(saving) {

  return shallow(<HomePage />);
}

describe('HomePage via Enzyme', () => {
  it('renders root div with class of jumbotron, h1 and p', () => {
    const wrapper = setup();
    expect(wrapper.find('.jumbotron').length).toBe(1);
  });

  it('contains h1 and p children', () => {
    const wrapper = setup();
    expect(wrapper.children('h1').text()).toEqual('Pluralsight Administration');
    expect(wrapper.children('p').length).toBe(1);
  });
});
