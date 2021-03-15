
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if (!matrix) {
    return [];
  }

  return matrix
    .map((item, i) =>
      (i % 2 === 0) ? item : item.reverse())
    .flat();

}
