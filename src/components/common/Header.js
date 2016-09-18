import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading, numCourses}) => {
  const num = (numCourses) ? numCourses : 0;
  const courseText = (numCourses === 1) ? 'Course' : 'Courses';

  return (
    <nav className="navbar navbar-default">
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
          </li>
          <li>
            <Link to="/courses" activeClassName="active">Courses</Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">About</Link>
          </li>
        </ul>
        <div className="navbar-left">
          {loading && <LoadingDots className="navbar-text" interval={100} dots={20} />}
        </div>
        <div className="nav navbar-right">
          <p className="navbar-text number-courses">{`${num} ${courseText}`}</p>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  numCourses: PropTypes.number
};

export default Header;
