function isValidLinkedInProfileURL(url) {
    const pattern = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    return pattern.test(url);
  }
  
  // Example usage:
  const profileURL = "https://www.linkedin.com/in/john_doe123";
  if (isValidLinkedInProfileURL(profileURL)) {
    console.log("Valid LinkedIn profile URL");
  } else {
    console.log("Invalid LinkedIn profile URL");
  }
  