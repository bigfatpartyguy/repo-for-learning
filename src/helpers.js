function sortRows(rows, fieldName, directionAsc) {
  const result = rows;
  if (directionAsc) {
    result.sort((a, b) => (a[fieldName] > b[fieldName] ? 1 : -1));
  } else {
    result.sort((a, b) => (a[fieldName] > b[fieldName] ? -1 : 1));
  }
  return result;
}

export { sortRows };
