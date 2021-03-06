var playerSelect; 
var computerChoice;
var computerCounter = 0;            //create base score
var playerCounter = 0;
 
//compare user vs computer aka playRound
var playRound = function(playerSelect, computerChoice) {
  console.log("You chose " + playerSelect + " versus the computer's mighty " + computerChoice + "!"); 
  if (playerSelect === computerChoice) {            //tie state
    console.log("It was a draw. Let's try this again.");     
  } else if ((playerSelect === "rock") && (computerChoice === "paper")) {
    console.log("Computer has this round all wrapped up!");
    computerCounter++;
  } else if((playerSelect === "rock") && (computerChoice === "scissors")) { 
    console.log("You smashed this round!");
    playerCounter++;
  } else if((playerSelect === "scissors") && (computerChoice === "paper")) {
    console.log("You snipped me! Plus one point for you.");
    playerCounter++;
  } else if((playerSelect === "scissors") && (computerChoice === "rock")) {
    console.log("I've crushed you! One point for me.");
    computerCounter++;
  } else if((playerSelect === "paper") && (computerChoice === "rock")) {
    console.log("You covered me up! Plus one point for you");
    playerCounter++;
  } else if((playerSelect === "paper") && (computerChoice === "scissors")) {
    console.log("Mwhahaha, what shall I make out of you?!? Maybe a snowflake.");
    computerCounter++;
  }
};  

//Checks scores to see if game should continue, 5 rounds (!ties), declare win/loss 
function game() {
  while(playerCounter + computerCounter < 5) {
    playerSelect = prompt("Choose your weapon!", "Rock, paper, or scissors?").toLowerCase();  //User input and convert to lower case
    var rules = {'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper'};
    var choices = Object.keys(rules);
    computerChoice = choices[Math.floor(Math.random() * choices.length)];  //computer input
    playRound(playerSelect, computerChoice);  
  }  
                                            
  if(playerCounter + computerCounter === 5) {
    if(playerCounter > computerCounter) {
    console.log("You have beaten me!  I will self destruct shortly.... :(");
    //clear computerCounter && playerCounter and ask if player wants new game? endState
    }else{
      console.log("I have beaten the mightiest human!  I can't wait to take over the world!");
      console.log("Your score was " + playerCounter + " :/");
    }      
  }
}

game();
