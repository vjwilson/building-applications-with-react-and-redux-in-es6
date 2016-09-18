import expect from 'expect';
import {authorsFormattedForDropdown, sortCourses} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
        const authors = [
          {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
          {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
        ];

        const expected = [
          {value: 'cory-house', text: 'Cory House'},
          {value: 'scott-allen', text: 'Scott Allen'}
        ];

        expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});

describe('Course Selectors', () => {
  describe('sortCourses', () => {
    it('should return courses sorted alphabetically', () => {
        const courses = [
          {id: 'b-course', title: 'B Course'},
          {id: 'c-course', title: 'C Course'},
          {id: 'a-course', title: 'A Course'}
        ];

        const expected = [
          {id: 'a-course', title: 'A Course'},
          {id: 'b-course', title: 'B Course'},
          {id: 'c-course', title: 'C Course'}
        ];

        expect(sortCourses(courses)).toEqual(expected);
    });
  });
});
