const readline = require("readline");
const choices = ["scissors", "paper", "rock"];

function createInput() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Hello!: ",
  });
}

function getPlayerChoice() {
  const rl = createInput();
  return new Promise((resolve, reject) => {
    rl.question(
      "Choose your move! \n1. Scissors\n2. Paper\n3. Rock\nYour choice: ",
      (input) => {
        rl.close();
        resolve(choices[Number.parseInt(input, 10) - 1]);
      }
    );
  });
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

module.exports = {
  getPlayerChoice,
  getComputerChoice,
};
