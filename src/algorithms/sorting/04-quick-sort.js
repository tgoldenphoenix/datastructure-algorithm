// Time complexity: O()

function quickSort(arr) {
  if(arr.length === 1){
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];
 
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  // for (const el of arr.slice(0, arr.length - 1)) {
  //   el < pivot ? leftArr.push(el) : rightArr.push(el);
  // }

  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...quickSort(leftArr), pivot];
  } else {
    return [pivot, ...quickSort(rightArr)];
  }
}

const arr1 = [1, 4, 2, 8, 345, 123, 12, 6, 25, 12, 1206, 2512, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 777, 92, 666];

console.log("before: ", arr1);
console.log("after: ", quickSort(arr1));