"use strict";

const React = require('react');

const CourseForm = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool.isRequired,
    errors: React.PropTypes.object
  },

  render: function() {
    return (
      <form onSubmit={this.props.onSave}>
        <h1>Manage Course</h1>
        <input type="text" name="title"/>
        <input
          type="submit"
          disabled={this.props.saving}
          value={this.props.saving ? 'Saving...' : 'Save'}/>
      </form>
    );
  }
});

module.exports = CourseForm;
