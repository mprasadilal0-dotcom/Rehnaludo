

// Rehan Ludo - Game System

let diceNumber = 1;
let currentPlayer = 1;

function rollDice() {
  diceNumber = Math.floor(Math.random() * 6) + 1;

  const dice = document.getElementById("dice");

  if (dice) {
    dice.innerText = diceNumber;
  }

  const status = document.getElementById("status");

  if (status) {
    status.innerText =
      "Player " + currentPlayer + " को " + diceNumber + " मिला!";
  }

  currentPlayer = currentPlayer === 4 ? 1 : currentPlayer + 1;
}

function resetGame() {
  diceNumber = 1;
  currentPlayer = 1;

  const dice = document.getElementById("dice");
  const status = document.getElementById("status");

  if (dice) dice.innerText = "🎲";
  if (status) status.innerText = "Game शुरू करें!";
}

console.log("Rehan Ludo चालू है!");
