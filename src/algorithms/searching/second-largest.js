// find second-largest number

const getLargestNum = (arr = []) => {
  let largestNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i]
    }
  }

  return largestNum
}

const getSecondLargestNum = (arr = []) => {
  let largestNum = arr[0];
  let secondLargestNum = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      secondLargestNum = largestNum
      largestNum = arr[i]
    } else if (arr[i] > secondLargestNum) {
      //second < arr[i] < largest
      secondLargestNum = arr[i]
    }
  }

  return secondLargestNum
}

const arr = [12, 6, 25, 12, 2, 44, 11, 7, 6, 25, 19, 100, 99]

console.log('The arry: ', arr)
console.log('The largest number is: ', getLargestNum(arr))
console.log('Second largest number is: ', getSecondLargestNum(arr))