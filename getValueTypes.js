function getValueTypes (obj) {
  var arr = []
  for (thing in obj) {
    type = typeof obj[thing]
    arr.push(type)
  }
  return arr
}

module.exports = getValueTypes
