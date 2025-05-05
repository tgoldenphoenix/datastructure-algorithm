function checkPalindrome(s, i) {
    if (i > s.length / 2) { return true; }
    return s[i] == s[s.length - i - 1] && checkPalindrome(s, i + 1)
}

let str1 = "racecar";
let str2 = "level";

let ans = checkPalindrome(str1, 0);

if (ans == true) {
    console.log("Yes,it is palindrome");
}
else {
    console.log("No,it is not palindrome");
}