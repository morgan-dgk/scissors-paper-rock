const { getPlayerChoice, getComputerChoice } = require("./utils");

async function play() {
  const computerChoice = getComputerChoice();
  const playerChoice = await getPlayerChoice();
  console.log({ playerChoice }, { computerChoice });
  if (playerChoice === computerChoice) {
    console.log("Draw! \n");
    return -1;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors");
    return 0;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats paper \n");
    return 0;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    return 0;
  } else {
    console.log(
      `You win! ${
        playerChoice[0].toUpperCase() + playerChoice.substring(1)
      } beats ${computerChoice} \n`
    );
    return 1;
  }
}

module.exports = play;
