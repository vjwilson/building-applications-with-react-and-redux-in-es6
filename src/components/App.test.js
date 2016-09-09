import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import App from './App';
import Header from './common/Header';

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

  it('renders a Header component as its first child', () => {
    const {output} = setup();
    expect(output.type).toBe('div');
    let [header] = output.props.children;
    expect(header.type).toBe(Header);
  });
});
