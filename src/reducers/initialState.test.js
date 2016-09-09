import expect from 'expect';
import initialState from './initialState';

describe('initialState constants', () => {
  it('should supply an empty array of authors', () => {
    expect(initialState.authors.length).toEqual(0);
  });

  it('should supply an empty array of courses', () => {
    expect(initialState.courses.length).toEqual(0);
  });

  it('should supply an Ajax call count of 0', () => {
    expect(initialState.numAjaxCallsInProgress).toEqual(0);
  });
});
