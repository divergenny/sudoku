module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
        if (matrix[row][column] === 0) {
          let options = divideAndConquer(row, column);
            for (let option of options) {
                matrix[row][column] = option;
            }
        }
    }
  }
  function divideAndConquer(row,column) {
    let data = [];
    let square = {
      row: Math.floor(row / 3) * 3, column: Math.floor(column / 3) * 3
    };
    for (let i = 0; i < 9; i++) {
      data.push( [ matrix[row][i], matrix[i][column], matrix[square.row + i % 3][square.column + Math.floor(i / 3)] ] );
    }
    return data;
  }
  return matrix;
}
