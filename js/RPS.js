$(document).ready(function() {
    var myChoices = ["rock", "paper", "scissors"];
    var compChoice = null;
    var myChoice = null;
    var results = null;
    $(".gameBtn").on("click", function() {
      var myRandomNumber = Math.floor(Math.random() * myChoices.length);
      compChoice = myChoices[myRandomNumber];
      myChoice = myChoices[this.id];
      $("#compChoice").html(compChoice);
      $("#myChoice").html(myChoice);
// be sure to use == for comparisons, and also === 
    if (myChoice == "rock" && compChoice == "rock"){
       results ="draw";
    }
    if (myChoice == "rock" && compChoice == "paper"){
      results ="Computer Wins";
    }
    if (myChoice == "rock" && compChoice == "scissors"){
      results ="You Win";
    }
    if (myChoice == "paper" && compChoice == "paper"){
      results ="draw";
    }
    if (myChoice == "paper" && compChoice == "rock"){
      results ="You Win";
    }
    if (myChoice == "paper" && compChoice == "scissors"){
      results ="Computer Wins";
    }
    if (myChoice == "scissors" && compChoice == "scissors"){
      results ="draw";
    }
    if (myChoice == "scissors" && compChoice == "paper"){
      results ="You Win";
    }
    if (myChoice == "scissors" && compChoice == "rock"){
      results ="Computer Wins";
    }
    $("#Results").html("You chose " + myChoice + " computer chose " + compChoice + " Result; " + results);
  });
  });

  








