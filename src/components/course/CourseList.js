import React, {PropTypes} from 'react';
import CourseListLow from './CourseListRow';

const CourseList = ({courses}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Action</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course =>
          <CourseListLow key={course.id} course={course} />
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
