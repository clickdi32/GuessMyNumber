"use strict";
let number = Math.round(Math.random() * 20 + 1);
let score = 100;
let highscore = 0;
const elmScore = document.querySelector(".score");
elmScore.innerHTML = score;

const elmMessage = document.querySelector(".message");
const elmH1 = document.querySelector("h1");
const elmHighscore = document.querySelector(".highscore");
const elmNumber = document.querySelector(".number");
console.log(number);

function again() {
  score = 100;
  elmScore.innerHTML = score;
  const elmInput = document.querySelector("#guessInput");
  elmInput.value = "";
  elmMessage.innerText = "Start guessing...";
  elmH1.innerText = "Guess My Number!";
  number = Math.round(Math.random() * 20 + 1);
  console.log(number);
  document.body.style.background = "#222";
}

function check() {
  const userNumber = document.getElementById("guessInput").value;
  elmNumber.innerText = userNumber
  if (+userNumber === 0) {
    elmMessage.innerText = "Start guessing...";
  } else if (+userNumber > 20 || +userNumber < 1) {
    elmMessage.innerText = "Number too big or too small";
    document.body.style.background = "#222";
  } else if (score === 0) {
    elmH1.innerText = "Game Over";
    document.body.style.background = "#222";
  } else if (+userNumber === number) {
    score += 10;
    elmScore.innerHTML = score;
    elmMessage.innerText = "Great you guessed the number";
    number = Math.round(Math.random() * 20 + 1);
    console.log(number);
    document.body.style.background = "green";
  } else {
    score -= 10;
    elmScore.innerText = score;
    elmMessage.innerText = "You were close, try again";
    document.body.style.background = "red";
  }

  if (score > highscore) {
    highscore = score;
    elmHighscore.innerText = highscore;
  } else if (score < highscore) {
    elmHighscore.innerText = highscore;
  }
}
