const userGuessEl = document.getElementById("userGuess");
const submitGuessEl = document.getElementById("submitGuess");
const feedbackEl = document.getElementById("feedback");
const restartButtonEl = document.getElementById("restartButton");
const celibarteBgEl = document.getElementsByClassName("celibarteBg");
const previousGuessEl = document.getElementById("previousGuess");

let randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(
  randomNumber +
    1 +
    " " +
    "Dont use developer mode for cheeting ok : result - 1 is real answer."
);

let previousGuesses = [];

submitGuessEl.addEventListener("click", () => {
  const guess = parseInt(userGuessEl.value);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    feedbackEl.textContent = "Please enter a valid number between 1 and 10.";
    userGuessEl.value = "";
    return;
  }

  previousGuesses.push(guess);
  console.log("previous guesses: " + previousGuesses);
  previousGuessEl.textContent = `Previous guesses: ${previousGuesses.join(
    ", "
  )}`;

  if (randomNumber === guess) {
    feedbackEl.textContent = "Congratulations! You guessed the correct number.";
    restartButtonEl.style.display = "block";
    celibarteBgEl[0].style.display = "block";

    setTimeout(() => {
      location.reload();
    }, 6000);
  } else {
    feedbackEl.textContent = "Oops, you guessed the wrong number.";
    restartButtonEl.style.display = "none";
    celibarteBgEl[0].style.display = "none";
  }
});

restartButtonEl.addEventListener("click", () => {
  location.reload();
});

userGuessEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submitGuessEl.click();
    userGuessEl.value = "";
  }
});
