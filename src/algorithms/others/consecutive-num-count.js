// https://646634.medium.com/counting-consecutive-elements-of-an-array-in-javascript-a31529712e16

function cntConsecutiveElements(arr) {
  let result = "";
  let counter = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      counter++;
    } else {
      result += arr[i] + counter;
      counter = 1;
    }
  }

  return result;
}

const arr = ["a", "b", "b", "b", "a", "a"];

console.log("input: ", arr);
console.log("result: ", cntConsecutiveElements(arr));