Array.prototype.bubbleSort = function() {
  
  let check = true;
  let resultArr = [...this];
  while (check) {
    check = false;
    
    for (let i = 0; i < resultArr.length - 1; i++) {
      if (resultArr[i] > resultArr[i + 1]) {
        let tmp = resultArr[i + 1];
        resultArr[i + 1] = resultArr[i];
        resultArr[i] = tmp;
        check = true;
      }
    }
  }
  return resultArr;
};

// console.log([1,3,5,7,8,3,2].bubbleSort());

String.prototype.substrings = function() {
  let resultArr = [];

  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j <= this.length; j++) {
      resultArr.push(this.slice(i,j));
    }
  }
  return resultArr;
};

// console.log("cat".substrings());