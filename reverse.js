// Define the input string
var input = "Hello, World!";

// Function to reverse the string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to reverse the string after a delay
function reverseAfterDelay(input, delay) {
  setTimeout(function () {
    var reversedString = reverseString(input);
    console.log("Reversed string: " + reversedString);
  }, delay);
}

// Call the function with a 2-second delay
var delayInSeconds = 2;
reverseAfterDelay(input, delayInSeconds);
console.log( delayInSeconds)
