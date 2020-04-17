function sortRows(rows, fieldName, directionAsc) {
  const result = rows;
  if (directionAsc) {
    result.sort((a, b) => (a[fieldName] > b[fieldName] ? 1 : -1));
  } else {
    result.sort((a, b) => (a[fieldName] > b[fieldName] ? -1 : 1));
  }
  return result;
}

function getStudentById(students, id) {
  return students.find((student) => student.id === id);
}

export { sortRows, getStudentById };
