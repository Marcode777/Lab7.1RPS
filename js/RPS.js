$(document).ready(function(){
    var roundCount = 1;
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
      $("#roundCount").html(roundCount);
      $("#compChoice").html(compChoice);
      $("#myChoice").html(myChoice);
      $("#ties").html(ties);
      $("#yourScore").html(youWin);
      $("#compScore").html(compWins);

// be sure to use == for comparisons, and also === 
    if (myChoice == "rock" && compChoice == "rock"){
       results ="draw"; 
       ties++;
       roundCount++;
       alert('ties '+ ties);
       $("#resultModal").modal('show').delay(3000);

    }
    if (myChoice == "rock" && compChoice == "paper"){
      results ="Computer Wins";
       compWins++;
       roundCount++;
       alert( "compWins" + compWins);
    }
    if (myChoice == "rock" && compChoice == "scissors"){
      results ="You Win";
      youWin++;
      roundCount++;
      alert("youWin" + youWin)
    }
    if (myChoice == "paper" && compChoice == "paper"){
      results ="draw";
      ties++;
      roundCount++;
      alert('ties '+ ties);
    }
    if (myChoice == "paper" && compChoice == "rock"){
      results ="You Win";
      youWin++;
      roundCount++;
      alert("youWin" + youWin)
    }
    if (myChoice == "paper" && compChoice == "scissors"){
      results ="Computer Wins";
      compWins++;
      roundCount++;
      alert("compWins" + compWins)
    }
    if (myChoice == "scissors" && compChoice == "scissors"){
      results ="draw";
      ties++;
      roundCount++;
      alert('ties '+ ties);
    }
    if (myChoice == "scissors" && compChoice == "paper"){
      results ="You Win";
      youWin++;
      roundCount++;
      alert("youWin" + youWin)
    }
    if (myChoice == "scissors" && compChoice == "rock"){
      results ="Computer Wins";
      compWins++;
      roundCount++;
      alert("compWins" + compWins)
    }
    $("#results").html("You chose:" + myChoice + "The computer chose:" + compChoice + "  The result: " + results);
  });
  });

  



  







