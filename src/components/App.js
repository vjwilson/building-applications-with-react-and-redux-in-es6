import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

export class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading} numCourses={this.props.numCourses} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  numCourses: PropTypes.number
};

function mapStateToProps(state) {
  return {
    loading: state.numAjaxCallsInProgress > 0,
    numCourses: state.courses.length
  };
}

export default connect(mapStateToProps)(App);
