// let array = ["vefa", "nermin", "fidan", "baki", "gence", 1, 2, 3];

// console.log(array.indexOf("baki")); //3
// console.log(array.indexOf("seki")); //-1

// console.log(array.includes("seki")); //false

// console.log(array.reverse());
// console.log(array.join());

let removeFunc = function (array, index, deleteNumber) {
  return array.splice(index, deleteNumber);
};

// console.log(removeFunc(array, 1, 3));
///////

let deleteFunc = function (array, startIndex, stopIndex) {
  return array.slice(startIndex, stopIndex);
};

// console.log(deleteFunc(array, 2, array.length - 2));

///
let newArr = [4, 22, 45, 66, 78, 4, 14, 4, 35];
let findElement = function (array) {
  let total = array.indexOf(4);
  return total;
};

console.log(findElement(newArr));
