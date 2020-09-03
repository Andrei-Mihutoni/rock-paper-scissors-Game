window.addEventListener("load", start);

function start() {
  console.log("start");

  document.querySelector("#buttons .rock").addEventListener("click", clickRock);
  document
    .querySelector("#buttons .paper")
    .addEventListener("click", clickPaper);
  document
    .querySelector("#buttons .scissors")
    .addEventListener("click", clickScissors);
}

let userChoice = "";
let computerChoice = ["rock", "paper", "scissors"];

function clickRock() {
  console.log("clickRock");

  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");

  userChoice = "rock";
  document
    .querySelector("#player1")
    .addEventListener("animationend", computerRandom);
}

function clickPaper() {
  console.log("clickPaper");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");

  userChoice = "paper";
  document
    .querySelector("#player1")
    .addEventListener("animationend", computerRandom);
}

function clickScissors() {
  console.log("clickScissors");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");

  userChoice = "scissors";

  document
    .querySelector("#player1")
    .addEventListener("animationend", computerRandom);
}

function computerRandom() {
  console.log("computerRandom");

  let randomChoice =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];

  console.log(randomChoice);

  makeChoice(randomChoice);
}

function makeChoice(randomChoice) {
  console.log("makeChoice");

  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");

  console.log(userChoice, randomChoice);

  if (userChoice == "rock") {
    document.querySelector("#player1").classList.add("rock");
  } else if (userChoice == "paper") {
    document.querySelector("#player1").classList.add("paper");
  } else if (userChoice == "scissors") {
    document.querySelector("#player1").classList.add("scissors");
  }

  if (randomChoice == "rock") {
    document.querySelector("#player2").classList.add("rock");
  } else if (randomChoice == "paper") {
    document.querySelector("#player2").classList.add("paper");
  } else if (randomChoice == "scissors") {
    document.querySelector("#player2").classList.add("scissors");
  }

  if (randomChoice == userChoice) {
    showTie();
  } else if (
    (userChoice == "rock") & (randomChoice == "paper") ||
    (userChoice == "paper") & (randomChoice == "scissors") ||
    (userChoice == "scissors") & (randomChoice == "rock")
  ) {
    showLose();
  } else if (
    (userChoice == "rock") & (randomChoice == "scissors") ||
    (userChoice == "paper") & (randomChoice == "rock") ||
    (userChoice == "scissors") & (randomChoice == "paper")
  ) {
    showWin();
  }
}

function showWin() {
  console.log("showWin");
  document.querySelector("#win").classList.remove("hidden");

  //   document.querySelector(".rock").addEventListener("click", restart);
  //   document.querySelector(".paper").addEventListener("click", restart);
  //   document.querySelector(".scissors").addEventListener("click", restart);
  refreshAfter5sec();
}

function showLose() {
  console.log("showLose");
  document.querySelector("#lose").classList.remove("hidden");
  refreshAfter5sec();
}

function showTie() {
  console.log("showTie");
  document.querySelector("#draw").classList.remove("hidden");
  refreshAfter5sec();
}

function refreshAfter5sec() {
  setTimeout(function () {
    window.location.reload(1);
  }, 5000); // After 5 secs
}

function restartGame() {
  location.reload();
  return false;
  //   document
  //     .querySelector("#playAgain")
  //     .addEventListener("click");
  console.log("restart button");
}
