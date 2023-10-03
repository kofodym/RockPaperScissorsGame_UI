// Make a choice by selecting from a node list of buttons (choices)
const buttons = document.querySelectorAll("button");

// Connect and display results in HTML by selecting the corresponding elements
const choices = document.querySelector(".choices");
const roundNo = document.querySelector(".roundNo");
const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");
const wonOrLose = document.querySelector("#wonOrLose");
const overalWinner = document.querySelector("#overalWinner");

// Create an iteration through each of the buttons using forEach
// Add an event listener that includes the click event handler and an arrow function that displays a message when any of the buttons is clicked
buttons.forEach((button) => {
  button.addEventListener("click", () => {

  });
});

// Step2: Randomly select computer choice
function getComputerChoice() {
  const symbols = ["rock", "paper", "scissors"];
  const selectCompChoice = Math.floor(Math.random() * symbols.length);

  // Return the random choice
  return symbols[selectCompChoice];
}

