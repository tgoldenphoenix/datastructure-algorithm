function createCounter() {
  // This variable is in the outer scope
  // This will be the backpack (closure) of the returned function below
  let count = 0; 

  return function() {
    // Accessing count from the outer scope
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

// =============== Making Private Variables ===================

function playerScore() {
  // private variable
  // The only way to interact with `score` is through the increase and getScore methods
  let score = 0;
  // return an object of two functions
  return {
    increase: function() {
      score += 10;
      return score;
    },
    getScore: function() {
      return score;
    }
  };
}
const player = playerScore();
console.log(player.getScore()); // 0
console.log(player.increase()); // 10
console.log(player.getScore()); // 10

// ==================== Function Factories =====================
//function factories are functions that generate other functions with specific behaviors.

function multiplier(factor) {
  return function(number) {
    return number * factor; // Closure remembers `factor`
  };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// The multiplier function generates functions that remember their factor.
// So, double always doubles and triple always triples, thanks to closures.