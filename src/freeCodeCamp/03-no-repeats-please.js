// argument array not string
const getPermutations = arr => {

  const output = [];

  const swapInPlace = (arrToSwap, indexA, indexB) => {
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };

  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.slice());
      return;
    }

    generate(n - 1, heapArr);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }

      generate(n - 1, heapArr);
    }
  };

  generate(arr.length, arr.slice());

  return output;
};

// console.log(getPermutations(['a', 'a', 'b']))

function permAlone(str) {
  // convert string -> array
  const arr = [...str];

  const perms = getPermutations(arr);

  let count = 0;

  for (const perm of perms) {
    let repeat = false;

    for (let i = 0; i < perm.length - 1; i++) {
      if (perm[i] === perm[i+1]) {
        repeat = true;
      }
    }

    if (!repeat) {
      count++;
    }
  }

  return count;
}

permAlone('aab');

// permutation: hoán vị