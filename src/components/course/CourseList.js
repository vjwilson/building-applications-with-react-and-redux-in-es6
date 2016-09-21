import React, {PropTypes} from 'react';
import CourseListLow from './CourseListRow';

const CourseList = ({courses, onDelete}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Action</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course =>
          <CourseListLow key={course.id} course={course} onDelete={onDelete} />
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDelete: React.PropTypes.func.isRequired
};

export default CourseList;
