function where (arr, propertiesObj) {

  arr = arr.filter(function(item) {
    for (key in propertiesObj){
      if (item[key]===undefined || item [key] != propertiesObj[key]){
        return false
      }
    }
    return true
  })
  return arr
}
module.exports = where
