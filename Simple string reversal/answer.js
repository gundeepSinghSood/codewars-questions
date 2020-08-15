function solve(str){
  var tempObj = [];
  var newStr = '';
  var index = 0;
   
  
  while ((index = str.indexOf(' ', index + 1)) > 0) {
    tempObj.push(index);
  } 
  var strNoSpace = str.replace(/\s/g, '');
    [...strNoSpace].forEach(function(idx, ind) {
      if(idx !== " ") {
        newStr += strNoSpace[(strNoSpace.length - 1) - ind];
      }
  })

  var test = '';
  var test2 = newStr.split('');
  Array.prototype.insert = function ( index, item ) {
    return this.splice( index, 0, item );
  };
      
  tempObj.forEach(function(abc) {
    console.log([].insert(abc, 'll'))
    test = [].splice(abc, 0, " ");
  })
  
  console.log(newStr, tempObj, test)
}

solve("your code rocks")