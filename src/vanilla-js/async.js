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