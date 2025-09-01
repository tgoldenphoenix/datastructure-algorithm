const fs = require('fs');

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

// run JS online: https://playcode.io/javascript

// Example 01
const myPromise = new Promise((resolve, reject) => {
  // executor (the producing code, "singer")
  // const rand = Math.floor(Math.random() *2)
  const rand = 0
  if(rand === 0) {
    // you can resolve() nothin
    // resolve()

    // or resolve with a return value
    resolve('resolve string')
  }else {
    reject()
  }
})

myPromise
  // .then(() => console.log("Success"))
  .then((result) => console.log(result)) // resolve string
  .catch(() => console.log("Something went wrong!!!"))

// =================== example 02 ===================
function takeYourTime() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      // resolve('resolved hehe')

      // will return an error object instead of a string
      reject(new Error('Whoops!'));
    }, 10000); // wait 10 seconds
  });
}

async function asyncCall() {
  console.log('calling async function');
  const p = takeYourTime();
  console.log('takeYourTime() returns: ' + p); // return [object Promise]
  try {
    // wait 10 seconds, free to do other things
    console.log('wait 10 seconds for the await')
    const result = await p;
    console.log('resolve() returns: ' + result); // string 'resolved hehe'
    console.log('data type: ' + typeof result); // string
  } catch (err) {
    console.log('reject() returns: ' + err);
    console.log('data type: ' + typeof err); // error object
  }
}
asyncCall()
console.log("While waiting 10 seconds, I can do other things :D")

// =================== example 03 ===================
let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('Another handler...'));
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

async function f() {
  return 1;
  // return Promise.resolve(1);
}
console.log(typeof f()) // object
f().then(alert); // 1