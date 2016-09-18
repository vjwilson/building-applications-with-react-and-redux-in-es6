import expect from 'expect';
import React from 'react';
import { Link, IndexLink } from 'react-router';
import {mount, shallow} from 'enzyme';
import Header from './Header';
import LoadingDots from './LoadingDots';

function setup(loading, numCourses) {
  let props = {
    loading: loading || false,
    numCourses: numCourses || 0,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<Header {...props}/>);
}

describe('Header via Enzyme', () => {
  it('should render navigation wrapper', () => {
    const wrapper = setup();
    expect(wrapper.find('nav').length).toBe(1);
  });

  it('should have one IndexLink element', () => {
    const wrapper = setup();
    expect(wrapper.find('IndexLink').length).toBe(1);
  });

  it('should have a list of regular Link elements', () => {
    const wrapper = setup();
    expect(wrapper.find('Link').length).toBeGreaterThan(1);
  });

  it('should not have a LoadingDots element when loading is false', () => {
    const loading = false;
    const wrapper = setup(loading);
    expect(wrapper.find('LoadingDots').length).toBe(0);
  });

  it('should have a LoadingDots element when loading is true', () => {
    const loading = true;
    const wrapper = setup(loading);
    expect(wrapper.find('LoadingDots').length).toBe(1);
  });

  it('should display the number of courses passed in', () => {
    const loading = false;
    const numCourses = 3;
    const wrapper = setup(loading, numCourses);
    expect(wrapper.find('.number-courses').length).toEqual(1);
    expect(wrapper.find('.number-courses').text()).toEqual('3 Courses');
  });

  it('should display 1 course, in singular, if 1 is passed in', () => {
    const loading = false;
    const numCourses = 1;
    const wrapper = setup(loading, numCourses);
    expect(wrapper.find('.number-courses').text()).toEqual('1 Course');
  });

  it('should display 0 courses if no number is passed in', () => {
    const loading = false;
    const wrapper = setup();
    expect(wrapper.find('.number-courses').text()).toEqual('0 Courses');
  });
});
