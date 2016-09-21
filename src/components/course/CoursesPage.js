import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import {sortCourses} from '../../selectors/selectors';
import toastr from 'toastr';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  onClickDelete(courseId) {
    this.props.actions.deleteCourse(courseId)
      .then(() => {
        toastr.success('Course deleted successfully.', 'Success!');
      })
      .catch((error) => {
        toastr.error(`${error} Course could not be deleted. Try again.`, 'Error!');
      });
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}>
          Add Course
        </button>
        <CourseList courses={this.props.courses} onDelete={this.onClickDelete} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: sortCourses(state.courses)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
