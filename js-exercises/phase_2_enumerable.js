Array.prototype.myEach = function(callback) {
  this.forEach(callback);
  return this;
};
function printNum(el) {
  console.log(el);
}

// console.log([1,2,3,4].myEach(printNum));


Array.prototype.myMap = function(callback) {
  let results = [];
  
  let mapCallback = (el) => {
    results.push(callback(el));
  };
  
  this.myEach(mapCallback);
  return results;
};

// console.log([1,2,3,4].myMap((el) => el * 2));

Array.prototype.myReduce = function(callback, accumulator = null) {
  const temp = [...this];
  if (accumulator === null) {
    accumulator = temp.shift();
  }
  
  const reduceCallback = (el) => {
    accumulator = callback(accumulator,el);
  };

  
  temp.myEach(reduceCallback); 
  return accumulator;
  
};

re1 = [1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}); // => 6

// console.log(re1);

// with initialValue
re2 = [1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}, 25); // => 31
// console.log(re2);

