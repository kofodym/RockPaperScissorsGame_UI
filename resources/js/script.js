// Make a choice by selecting from a node list of buttons (choices)
const buttons = document.querySelectorAll("button");

// Connect and display results in HTML by selecting the corresponding elements
const choices = document.querySelector(".choices");
const roundNo = document.querySelector(".roundNo");
const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");
const wonOrLose = document.querySelector("#wonOrLose");
const overalWinner = document.querySelector("#overalWinner");

// Initialize the round, countUser, and countComputer to 0
let round = 0;
let countUser = 0;
let countComputer = 0;

// Create an iteration through each of the buttons using forEach
// Add an event listener that includes the click event handler and an arrow function that displays a message when any of the buttons is clicked
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Call the playRound function and pass the clicked button
    playRound(button);
    //next enter the text
    // result.textContent = results;
  });
});

// Step2: Randomly select computer choice
function getComputerChoice() {
  const symbols = ["rock", "paper", "scissors"];
  const selectCompChoice = Math.floor(Math.random() * symbols.length);

  // Return the random choice
  return symbols[selectCompChoice];
}

// Step3: Play the game by comparing user_choice to computer_choice
function playGame(userInput, computerInput) {
  // Display the choices and result
  const resultMessage = `You Picked: ${userInput}, Computer Picked: ${computerInput}. `;

  // Check for a tie
  if (userInput === computerInput) {
    choices.textContent = resultMessage;
    wonOrLose.textContent = "It's a tie, try again";
    wonOrLose.style.color = "blue";
    return "tie";
  }

  // Conditions when user wins
  if (
    (userInput == "rock" && computerInput === "scissors") ||
    (userInput == "paper" && computerInput === "rock") ||
    (userInput == "scissors" && computerInput === "paper")
  ) {
    choices.textContent = resultMessage;
    wonOrLose.textContent = `You won! ${userInput} beats ${computerInput}`;
    wonOrLose.style.color = "green";
    countUser++;
    return "won";
  }

  // Condition when user loses to computer
  if (
    (computerInput == "rock" && userInput === "scissors") ||
    (computerInput == "paper" && userInput === "rock") ||
    (computerInput == "scissors" && userInput === "paper")
  ) {
    choices.textContent = resultMessage;
    wonOrLose.textContent = `Computer won! ${computerInput} beats ${userInput}`;
    wonOrLose.style.color = "red";
    countComputer++;
    return "lose";
  }
}

// Function to play one round of the game
function playRound(button) {
  // Get the user's choice from the button's ID
  const userChoice = button.id;
  // Get the computer's random choice
  const computerChoice = getComputerChoice();

  // Play one round of the game
  playGame(userChoice, computerChoice);
  // Increment the round counter
  round++;
  // Update the HTML elements with the round and scores
  roundNo.textContent = round;
  compScore.textContent = countComputer;
  playerScore.textContent = countUser;


  
}
