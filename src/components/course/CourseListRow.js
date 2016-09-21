import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course, onDelete}) => {
  function deleteClick(event) {
    event.preventDefault();
    onDelete(course.id);
  }

  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
      <td>
        <button
          type="button"
          onClick={deleteClick}
          className="btn btn-sm btn-danger">
            Delete
        </button>
      </td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  onDelete: React.PropTypes.func.isRequired
};

export default CourseListRow;
