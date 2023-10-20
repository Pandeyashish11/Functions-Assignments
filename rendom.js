let delayInSeconds = 3; 

function generateRandomNumber() {
  // Generate a random number here, e.g., between 1 and 100
  const randomNum = Math.floor(Math.random() * 100) + 1;
  console.log(`Random number: ${randomNum}`);
}

function startDelay() {
  console.log(`Generating a random number in ${delayInSeconds} seconds...`);
  
  let secondsLeft = delayInSeconds;
  const countdownInterval = setInterval(() => {
    secondsLeft--;
    if (secondsLeft > 0) {
      console.log(`Time remaining: ${secondsLeft} seconds...`);
    } else {
      clearInterval(countdownInterval);
      generateRandomNumber();
    }
  }, 1000); 
}

startDelay();
