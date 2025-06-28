function updateInventory(arr1, arr2) {
  // reduce 2 arr => 2 object
  const obj1 = arr1.reduce((acc, [amt, name]) => {
    return {
      ...acc,
      [name]: amt
    }
  }, {})

  const obj2 = arr2.reduce((acc, [amt, name]) => {
    return {
      ...acc,
      [name]: amt
    }
  }, {});

  // console.log(obj1);
  // console.log(obj2);

  // mutate obj1 based on obj2
  for (const name in obj2) {
    if (name in obj1) {
      obj1[name] += obj2[name]
    } else {
      obj1[name] = obj2[name];
    }
  }

  // console.log(obj1);

  // convert obj1 back to 2 dimension array and sort alphabetical =>
  const output = [];
  for (const item in obj1) {
    output.push([obj1[item],item]);
  }
  // console.log(output);

  return output.sort((arr1,arr2) => arr1[1].localeCompare(arr2[1]));
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

// should return 6 elements
// console.log(updateInventory(curInv, newInv));
updateInventory(curInv, newInv);