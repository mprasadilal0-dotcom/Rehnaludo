
// Rehan Ludo 🎲

let diceNumber = 1;

function rollDice() {
  diceNumber = Math.floor(Math.random() * 6) + 1;

  const dice = document.getElementById("dice");

  if (dice) {
    dice.innerText = diceNumber;
  }

  console.log("Dice:", diceNumber);
}

console.log("Rehan Ludo Ready!");
