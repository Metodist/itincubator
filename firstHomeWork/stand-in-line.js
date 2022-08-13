function nextInLine(arr, item) {
  let queue = arr.push(item);
  let removeItem = arr.shift();
  return removeItem;  
}


// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));