const fs = require('fs')

// ========== Callbacks ========== 

// An example of a callback hell
stepOne((err, result) => {
  if (err) return console.error(err);
  console.log(result);
  stepTwo((err, result) => {
    if (err) return console.error(err);
    console.log(result);
    stepThree((err, result) => {
      if (err) return console.error(err);
      console.log(result);
      strepFour((err, result) => {
        if (err) return console.error(err);
        console.log(result);
      })
    });
  });
});

// button event handler
element.addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Hello World";
}); 

// =============== Promises ===============

// Create a promise
const myPromise = new Promise((resolve, reject) => {
  // executor (the producing code, "singer")
  const rand = Math.floor(Math.random() *2)
  if(rand === 0) {
    resolve()
  }else {
    reject()
  }
})
myPromise
  .then(() => console.log("Success"))
  .catch(() => console.log("Something went wrong!!!"))

/*==========================*/

// This function return a promise object
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
delay(3000).then(() => alert('runs after 3 seconds'));

// Promise chaining
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
}).then(function(result) { // (**)
  alert(result); // 1
  return result * 2;
}).then(function(result) { // (***)
  alert(result); // 2
  return result * 2;
}).then(function(result) {
  alert(result); // 4
  return result * 2;
});

// =============== Async & Await ===============

const loadFile = async () => {
  try {
    const data = await fs.promises.readFile('./closure.js', {
      encoding: 'utf-8'
    })
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}