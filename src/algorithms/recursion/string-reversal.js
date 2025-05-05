function reverseString(str) {
    // Base case
    if (str === "" || str.length === 1) {
      return str;
    }
    // Calling function recursively
    return reverseString(str.substring(1)) + str[0];
}

console.log("Pham An Hao: ", reverseString("Pham An Hao"));
console.log(reverseString("Tran Kim Phuong"));
console.log(reverseString("GFG"));