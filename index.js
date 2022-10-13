#!/usr/bin/env node
const getInput = require("./lib/utils");
const play = require("./lib/play");

async function main() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let res = await play();
    console.log(res);

    switch (res) {
      case 1:
        playerScore += 1;
        break;
      case 0:
        computerScore += 1;
    }
  }
  console.log({ playerScore }, { computerScore });
}

main();
