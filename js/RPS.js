$(document).ready(function() {
    var myChoices = ["rock", "paper", "scissors"];

    $(".gameBtn").on("click", function() {
      var myRandomNumber = Math.floor(Math.random() * myChoices.length);
      $("#compChoice").html(myChoices[myRandomNumber]);
      $("#myChoice").html(myChoices[this.data]);
        console.log(myChoices[this.id]);
   });
  });
    








