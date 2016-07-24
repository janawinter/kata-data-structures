function getMatrix(n) {
  var matrix = [];
  for(var i=0; i<n; i++) {
    var newArray=[];
    matrix.push(newArray)
  }
  for(var j=0; j<n; j++){
    for (var k=0; k<n; k++) {
      matrix[j].push(0)
    }
  }
  return matrix
}

function updateMatrix (matrix, coords, value) {
  var rowNum = coords[0]
  var colNum = coords[1]
  matrix[rowNum][colNum]=value
  return matrix
}

module.exports = {
  getMatrix: getMatrix,
  updateMatrix: updateMatrix
}
