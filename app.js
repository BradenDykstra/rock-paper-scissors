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
        return "We both chose <i class='far fa-hand-rock text-primary'></i>rock, so it's a <span class='text-primary'>tie</span>.";
      case 1:
        score.losses += 1;
        return "I chose <i class='far fa-hand-paper text-danger'></i>paper, and <i class='far fa-hand-paper text-danger'></i>paper beats <i class='far fa-hand-rock text-success'></i>rock, so you <span class='text-danger'>lose</span>.";
      case 2:
        score.wins += 1;
        return "I chose <i class='far fa-hand-scissors text-danger'></i>scissors, and <i class='far fa-hand-rock text-success'></i>rock beats <i class='far fa-hand-scissors text-danger'></i>scissors, so you <span class='text-success'>win</span>.";
    }
  } else if (userChoice == "paper") {
    switch (opponentChoice) {
      case 0:
        score.wins += 1;
        return "I chose <i class='far fa-hand-rock text-danger'></i>rock, and <i class='far fa-hand-paper text-success'></i>paper beats <i class='far fa-hand-rock text-danger'></i>rock, so you <span class='text-success'>win</span>.";
      case 1:
        score.ties += 1;
        return "We both chose <i class='far fa-hand-paper text-primary'></i>paper, so it's a <span class='text-primary'>tie</span>.";
      case 2:
        score.losses += 1;
        return "I chose <i class='far fa-hand-scissors text-danger'></i>scissors, and <i class='far fa-hand-scissors text-danger'></i>scissors beat <i class='far fa-hand-paper text-success'></i>paper, so you <span class='text-danger'>lose</span>.";
    }
  } else {
    switch (opponentChoice) {
      case 0:
        score.losses += 1;
        return "I chose <i class='far fa-hand-rock text-danger'></i>rock, and <i class='far fa-hand-rock text-danger'></i>rock beats <i class='far fa-hand-scissors text-success'></i>scissors, so you <span class='text-danger'>lose</span>.";
      case 1:
        score.wins += 1;
        return "I chose <i class='far fa-hand-paper text-danger'></i>paper, and <i class='far fa-hand-scissors text-success'></i>scissors beat <i class='far fa-hand-paper text-danger'></i>paper, so you <span class='text-success'>win</span>.";
      case 2:
        score.ties += 1;
        return "We both chose <i class='far fa-hand-scissors text-primary'></i>scissors, so it's a <span class='text-primary'>tie</span>.";
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
  result.innerHTML = opponentChoice;
  let wins = document.querySelector("#wins");
  let losses = document.querySelector("#losses");
  let ties = document.querySelector("#ties");
  wins.textContent = score.wins.toString();
  losses.textContent = score.losses.toString();
  ties.textContent = score.ties.toString();
}