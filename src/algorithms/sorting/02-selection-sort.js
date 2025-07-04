// Time Complexity = O(n^2)
// Space Complexity = O(1)

const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // n
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      // n
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};

console.log(selectionSort([29, 10, 14, 37, 14]));
