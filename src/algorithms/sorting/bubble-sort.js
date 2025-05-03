// Ques 1: Implement Bubble Sort in JavaScript
// Write a function to sort the given array nums in ascending order (nhỏ đến lớn).

// Input: nums = [29,10,14,37,14] ----->>>>>  Output: [10,14,14,29,37]

const bubbleSort = (arr) => {
  // make a shallow copy
  // we don't want to mutate argument
  const arrCopy = [...arr];

  const n = arrCopy.length;
  for (let i = 0; i < n; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arrCopy[j] > arrCopy[j + 1]) {
        // ES6
        // destructuring for swapping inside array
        [arrCopy[j], arrCopy[j + 1]] = [arrCopy[j + 1], arrCopy[j]];
      }
    }
  }

  return arrCopy;
};

const arr = [1, 4, 2, 345, 123, 1206, 2512, 29, 10, 14, 37, 14];
console.log('original array: ', arr);
console.log("sorted array: ", bubbleSort(arr));

// Best Time Complexity = O(n) or O(2n)
// Worst Time Complexity = O(n^2)
// Average Time Complexity = O(n^2)

// Space Complexity = O(1)