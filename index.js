let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessesRemaining = 3;

document.getElementById("guessButton").addEventListener("click", guessNumber);
document.getElementById("guessInput").addEventListener("keypress", tryFormSubmit);

function tryFormSubmit(){
  if( event.keyCode == 13){
    guessNumber();
  }
}

function guessNumber() {
  if (guessesRemaining === 0) {
    document.getElementById("message").textContent = "You've run out of guesses. The correct number was " + randomNumber;
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessButton").disabled = true;
    return;
  }

  let guess = parseInt(document.getElementById("guessInput").value);
  guessesRemaining--;

  if (guess === randomNumber) {
    document.getElementById("message").textContent = "Congratulations! You guessed correctly.";
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessButton").disabled = true;
  } else if (guess < randomNumber) {
    document.getElementById("message").textContent = "Too low. Guesses remaining: " + guessesRemaining;
  } else {
    document.getElementById("message").textContent = "Too high. Guesses remaining: " + guessesRemaining;
  }
}