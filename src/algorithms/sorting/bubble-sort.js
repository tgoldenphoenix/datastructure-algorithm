// Ques 1: Implement Bubble Sort in JavaScript
// Write a function to sort the given array nums in ascending order (nhỏ đến lớn).

// Input: nums = [29,10,14,37,14] ----->>>>>  Output: [10,14,14,29,37]

// Best Time Complexity = O(n) or O(2n)
// Worst Time Complexity = O(n^2)
// Average Time Complexity = O(n^2)

// Space Complexity = O(1)

const bubbleSort = (arr) => {
  // make a shallow copy
  // we don't want to mutate argument
  const arrCopy = [...arr];

  const n = arrCopy.length;
  let outLoopCount = 0;

  for (let i = 0; i < n; i++) {
    let swapped = false;
    outLoopCount++;
    for (j = 0; j < n - i - 1; j++) {
      if (arrCopy[j] > arrCopy[j + 1]) {
        // ES6
        // destructuring for swapping inside array
        [arrCopy[j], arrCopy[j + 1]] = [arrCopy[j + 1], arrCopy[j]];
        swapped = true;
      }
    }
    if (!swapped) { break; }
  }

  console.log("sort time: ", outLoopCount)

  return arrCopy;
};

const arr1 = [1, 4, 2, 345, 123, 1206, 2512, 29, 10, 14, 37, 14, 0, 9, 333, 7];

// This array will be sorted after the first run
// then we break out of the loop
const arr2 = [3, 2, 9, 12, 13, 14, 20, 21, 22, 23, 24, 25, 26, 27]

console.log('original array: ', arr2);
console.log("sorted array: ", bubbleSort(arr2));
