const util = require("util");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = util.promisify(rl.question).bind(rl);
const prompt =
  "Choose your move! \n 1. Scissors \n 2. Paper \n 3. Rock \n Your choice: ";

async function getPlayerInput() {
  const playerInput = await question(prompt);
  console.log(playerInput);
}

module.exports = getPlayerInput;
