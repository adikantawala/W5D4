function range(start, end) {
  if (start === end ) {
    return [end] ;
  } 
  else {
    return [start].concat(range(start + 1, end));
  }
}

// console.log(range(1,10));

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  } 
  else {
    return arr[0] + sumRec(arr.slice(1));
  }
}

// console.log(sumRec([1,2,3,4]))

function exponent1(base, ex) {
  if (ex === 0){
    return 1;
  } else {
    return base * (exponent1(base, ex -1));
  }
}

// console.log(exponent1(2, 3))

function exponent2(base, ex) {
  if (ex === 0) {
    return 1;
  } else if (ex === 1) {
    return base;
  } else if (ex % 2 === 0) {
    return exponent2(base, ex / 2) ** 2;
  } else {
    return base * (exponent2(base, (ex - 1) / 2) ** 2);
  }
}

// console.log(exponent2(2, 3))
// console.log(exponent2(2, 4))
// console.log(exponent2(-2, 3))

function fibonacci(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  }
  
  prevFibs = fibonacci(n - 1);
  prevFibs.push(prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2])
  
  return prevFibs;
}

// console.log(fibonacci(5));

function deepDup(arr) {
  // if (!(arr instanceof Array)) {
  //   return [arr];
  // }
  let resultsArr = [];
  arr.forEach((el) => {
    if (el instanceof Array) {
      resultsArr.push(deepDup(el));
    } else {
      resultsArr.push(el);
    }
  });
  return resultsArr;
}
arr1 = [1,2,3,[4,[5]]]
arr2 = deepDup(arr1)
console.log()