// Regular expression to match valid URLs
const urlRegex = /^(https?:\/\/)[A-Za-z0-9.-]+\.[A-Za-z]+/;

// Function to validate a URL
function validateURL(input) {
  if (urlRegex.test(input)) {
    console.log("Valid URL");
  } else {
    console.log("Invalid URL");
  }
}

// Test the function with some example URLs
validateURL("http://www.example.com"); // Valid URL
validateURL("https://sub.example.co.uk"); // Valid URL
validateURL("ftp://invalid-url.com"); // Invalid URL
validateURL("https://123"); // Invalid URL
