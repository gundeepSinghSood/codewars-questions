function getStrings(city){
  var strObj = {};
  var cityLower = city.toLowerCase().replace(/\s/g, '');
  
  Object.keys(cityLower).forEach(function(item) {
    if(cityLower[item] in strObj) {
      strObj[cityLower[item]] += '*';
    } else {
      strObj[cityLower[item]] = '*';
    }
  })
  
  return Object.entries(strObj).map(x=>x.join(":")).join(",")
}