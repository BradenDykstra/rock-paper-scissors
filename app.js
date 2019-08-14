let score = {
  wins: 0,
  losses: 0,
  ties: 0
}

function opponentChoose(userChoice) {
  let opponentChoice = Math.floor(Math.random() * 3)
  // if (opponentChoice == 0) {
  //   opponentChoice = "rock";
  // } else if (opponentChoice == 1) {
  //   opponentChoice = "paper";
  // } else {
  //   opponentChoice = "scissors";
  // }
  let opponent = document.querySelector("#opponent");
  if (opponentChoice == 0) {
    opponent.innerHTML = "<img src='rock.png' alt='' height='150px' width='150px'>"
  } else if (opponentChoice == 1) {
    opponent.innerHTML = "<img src='paper.png' alt='' height='150px' width='150px'>"
  } else {
    opponent.innerHTML = "<img src='scissors.png' alt='' height='150px' width='150px'>"
  }
  if (userChoice == "rock") {
    switch (opponentChoice) {
      case 0:
        score.ties += 1;
        return "I chose rock, it's a tie";
      case 1:
        score.losses += 1;
        return "I chose paper, you lose";
      case 2:
        score.wins += 1;
        return "I chose scissors, you win";
    }
  } else if (userChoice == "paper") {
    switch (opponentChoice) {
      case 0:
        score.wins += 1;
        return "I chose rock, you win";
      case 1:
        score.ties += 1;
        return "I chose paper, it's a tie";
      case 2:
        score.losses += 1;
        return "I chose scissors, you lose";
    }
  } else {
    switch (opponentChoice) {
      case 0:
        score.losses += 1;
        return "I chose rock, you lose";
      case 1:
        score.wins += 1;
        return "I chose paper, you win";
      case 2:
        score.ties += 1;
        return "I chose scissors, it's a tie";
    }
  }
}

function play(userChoice) {
  let result = document.querySelector("#result");
  let opponentChoice = opponentChoose(userChoice);
  let user = document.querySelector("#user");
  if (userChoice == 'rock') {
    user.innerHTML = "<img src='rock.png' alt='' height='150px' width='150px'>"
  } else if (userChoice == 'paper') {
    user.innerHTML = "<img src='paper.png' alt='' height='150px' width='150px'>"
  } else {
    user.innerHTML = "<img src='scissors.png' alt='' height='150px' width='150px'>"
  }
  result.textContent = opponentChoice;
  let wins = document.querySelector("#wins");
  let losses = document.querySelector("#losses");
  let ties = document.querySelector("#ties");
  wins.textContent = score.wins.toString();
  losses.textContent = score.losses.toString();
  ties.textContent = score.ties.toString();
}