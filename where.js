function where (arr, propertiesObj) {

  arr = arr.filter(function(item) {
    for (key in propertiesObj){
      if (item[key]===undefined || item [key] != propertiesObj[key]){
        return false
      }
    }
    return true
  })
  if (arr.length>1) {
    return arr
  }
  else{
    return arr[0]
  }
}
module.exports = where
