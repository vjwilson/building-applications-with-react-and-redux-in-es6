import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import App from './App';

function setup() {

  let renderer = TestUtils.createRenderer();
  renderer.render(<App />);
  let output = renderer.getRenderOutput();

  return {
    output,
    renderer
  };
}

describe('App via React Test Utils', () => {
  it('should exist', () => {
    expect(App).toExist();
  });

  it('renders p tag temporarily', () => {
    const {output} = setup();
    expect(output.type).toBe('div');
    let [p] = output.props.children;
    expect(p.type).toBe('p');
  });
});
