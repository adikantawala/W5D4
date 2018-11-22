Array.prototype.uniq = function() {
  let uniq_arr = [];
  this.forEach((el) => {
    if (!uniq_arr.includes(el)) {
      uniq_arr.push(el);
    }
  });
  return uniq_arr;
};

// console.log([1,2,3,3].uniq());

Array.prototype.twosum = function() {
  let sum_positions = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        sum_positions.push([i, j]);
      }
    }
  }
  return sum_positions;
};

// console.log([1,2,-2,-1, 3].twosum())

Array.prototype.transpose = function() {
  let result_arr = new Array(this[0].length);
  for (let k = 0; k < result_arr.length; k++){
    result_arr[k] = new Array(this.length);
  }
  
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      result_arr[j][i] = this[i][j];
    }
  }
  return result_arr;
};

// console.log([[1,2],[3,4],[5,6]].transpose());