$(document).ready(function(){
    var ties = 0;
    var compWins = 0;
    var youWin = 0;
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
       ties++;
       alert('ties '+ ties);
    }
    if (myChoice == "rock" && compChoice == "paper"){
      results ="Computer Wins";
       compWins++;
    }
    if (myChoice == "rock" && compChoice == "scissors"){
      results ="You Win";
      youWin++;
    }
    if (myChoice == "paper" && compChoice == "paper"){
      results ="draw";
      ties++;
      alert('ties '+ ties);
    }
    if (myChoice == "paper" && compChoice == "rock"){
      results ="You Win";
      youWin++;
    }
    if (myChoice == "paper" && compChoice == "scissors"){
      results ="Computer Wins";
      compWins++;
    }
    if (myChoice == "scissors" && compChoice == "scissors"){
      results ="draw";
      ties++;
      alert('ties '+ ties);
    }
    if (myChoice == "scissors" && compChoice == "paper"){
      results ="You Win";
      youWin++;
    }
    if (myChoice == "scissors" && compChoice == "rock"){
      results ="Computer Wins";
      compWins++;
    }
    $("#Results").html("You chose " + myChoice + " computer chose " + compChoice + " Result; " + results);
  });
  });

  



  







