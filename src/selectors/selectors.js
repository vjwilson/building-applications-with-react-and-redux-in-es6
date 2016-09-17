export function authorsFormattedForDropdown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`
    };
  });
}

export function sortCourses(courses) {
  return [].concat(courses).sort((course1, course2) => {
    return (course1.title > course2.title) ? 1 : -1;
  });
}
