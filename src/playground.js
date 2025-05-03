function symDiff(arr1, arr2) {
  const output = [];

  for (const el of arr1) {
    if(!output.includes(el) && !arr2.includes(el)) {
      output.push(el)
    }
  }

  for (const el of arr2) {
    if (!output.includes(el) && !arr1.includes(el)) {
      output.push(el)
    }
  }

  return output;
}

// symDiff([1, 2, 3], [5, 2, 1, 4])

function sym(args) {
  const arrOfArrs = [...arguments];
  // console.log(arrOfArrs)

  let output = arrOfArrs[0];

  for (let i = 1; i < arrOfArrs.length; i++) {
    output = symDiff(output, arrOfArrs[i]);
  }

  return output;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
sym([1, 2, 3], [5, 2, 1, 4]);