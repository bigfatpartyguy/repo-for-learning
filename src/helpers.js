function sortRows(rows, fieldName, directionAsc) {
  const result = rows;
  if (directionAsc) {
    result.sort((a, b) => {
      if (Date.parse(a[fieldName])) {
        return Date.parse(a[fieldName]) > Date.parse(b[fieldName]) ? 1 : -1;
      }
      return a[fieldName] > b[fieldName] ? 1 : -1;
    });
  } else {
    result.sort((a, b) => {
      if (Date.parse(a[fieldName])) {
        return Date.parse(a[fieldName]) > Date.parse(b[fieldName]) ? -1 : 1;
      }
      return a[fieldName] > b[fieldName] ? -1 : 1;
    });
  }
  return result;
}

function getStudentById(students, id) {
  return students.find((student) => student.id === id);
}

function getDateMask(dateString) {
  const dateObj = new Date(dateString);
  return dateObj.toLocaleDateString();
}

export { sortRows, getStudentById, getDateMask };
