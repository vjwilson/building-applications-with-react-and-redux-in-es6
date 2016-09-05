import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import HomePage from './HomePage';

function setup() {

  let renderer = TestUtils.createRenderer();
  renderer.render(<HomePage />);
  let output = renderer.getRenderOutput();

  return {
    output,
    renderer
  };
}

describe('HomePage via React Test Utils', () => {
  it('should exist', () => {
    expect(HomePage).toExist();
  });

  it('renders div, h1 and p', () => {
    const {output} = setup();
    expect(output.type).toBe('div');
    let [h1, p] = output.props.children;
    expect(h1.type).toBe('h1');
    expect(p.type).toBe('p');
  });
});
