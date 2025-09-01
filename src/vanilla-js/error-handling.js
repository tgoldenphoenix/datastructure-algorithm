let json = "{ bad json }";

try {
  let user = JSON.parse(json); // <-- when an error occurs...
  alert( user.name ); // doesn't work
} catch (err) {
  // ...the execution jumps here
  alert( "Our apologies, the data has errors, we'll try to request it one more time." );
  alert( err.name );
  alert( err.message );
}

// Throwing our own error
let json2 = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
    // immediately jump to catch{} and skip the `alert()` below
  }

  alert( user.name );
} catch (err) {
  alert( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}

// ==============
console.log('before error')
kkkkk; // ReferenceError: kkkkk is not defined
console.log('after error')