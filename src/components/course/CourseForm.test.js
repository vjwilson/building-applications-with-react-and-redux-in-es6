import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

function setup(saving) {
  let props = {
    course: {},
    saving: saving || false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('CourseForm via React Test Utils', () => {
  it('should exist', () => {
    expect(CourseForm).toExist();
  });

  it('renders form with a TextInput and a SelectInput', () => {
    const {output} = setup();
    expect(output.type).toBe('form');
    let [textInput, selectInput] = output.props.children;
    expect(textInput.type).toBe(TextInput);
    expect(selectInput.type).toBe(SelectInput);
  });

  it('save button is labelled "Save" when not saving', () => {
    const {output} = setup(false);
    const submitButton = output.props.children[4];
    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is labelled "Saving..." when saving', () => {
    const {output} = setup(true);
    const submitButton = output.props.children[4];
    expect(submitButton.props.value).toBe('Saving...');
  });
});
