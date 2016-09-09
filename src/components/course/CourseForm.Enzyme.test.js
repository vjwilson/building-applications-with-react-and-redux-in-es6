import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseForm from './CourseForm';

function setup(saving) {
  let props = {
    course: {},
    loading: saving || false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props}/>);
}

describe('CourseForm via Enzyme', () => {
  it('should exist', () => {
    expect(CourseForm).toExist();
  });

  it('renders form', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
  });

  it('save button is labelled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input[type="submit"]').props().value).toBe('Save');
  });

  it('save button is labelled "Saving..." when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input[type="submit"]').props().value).toBe('Saving...');
  });
});
