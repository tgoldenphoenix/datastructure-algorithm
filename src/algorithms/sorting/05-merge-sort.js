// A helper function
// leftArr and rightArr must be sorted!
function merge(leftArr, rightArr) {
  output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];

    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }

  return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}

// console.log(merge([3,6,9], [1,10,99]))

// The main function
const mergeSort = array =>  {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftArr = array.slice(0, middleIndex);
  const rightArr = array.slice(middleIndex);

  return merge(
    mergeSort(leftArr),
    mergeSort(rightArr)
  );
};

function printArray(arr) {
    console.log(arr.join(" "));
}

// Driver code
const arr = [12, 11, 13, 5, 6, 7, 99, 3, 100, 1206, -6, -12];

console.log("Before: ", arr);
console.log("\nSorted array is: ", mergeSort(arr));