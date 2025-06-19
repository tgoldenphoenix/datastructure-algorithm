function createCounter() {
  let count = 0; // This variable is in the outer scope

  return function() {
    count++;
    console.log(`Current count: ${count}`);
  };
}

const counter = createCounter();

counter(); // Current count: 1
counter(); // Current count: 2
counter(); // Current count: 3

/*
===========================================================
===========================================================
*/

function createCounter(startValue) {
  let count = startValue; // count starts from the passed value

  return function() {

    count++;

    console.log(`Current count: ${count}`);

  };

}


const counterFrom10 = createCounter(10);

counterFrom10(); // Current count: 11

counterFrom10(); // Current count: 12

counterFrom10(); // Current count: 13


const counterFrom5 = createCounter(5);

counterFrom5(); // Current count: 6

counterFrom5(); // Current count: 7