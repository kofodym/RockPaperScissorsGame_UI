# RockPaperScissorsGame_UI

A Rock Paper Scissors Game played via a user interface displaying skills learned in Javascript DOM manipulation

<h1>Welcome to Rock Paper Scissors</h1>
        <p>
            You are presented with three game choices: ROCK, PAPER, AND SCISSORS.
        </p>
        <p>The following instructions will guide you on how to play the game</p>
        <div class="instruct">
            <ul>
                <li>If Rock beats Scissors</li>
                <li>If Scissors beats Paper</li>
                <li>If Paper beats Rock</li>
                <li>
                    If both players select the same option, then it is a tie, and the
                    players replay the game again
                </li>
                <li>After two rounds a winner is declared</li>
            </ul>


<h2>Algorithm Used</h2>
1. Create your HTML structure
2. Add CSS to your HTML arranging how your game will look
3. Add a js file, and create a variable that will make a choice by selecting from a list of buttons(choices)
4. create variables that select ID and Classes from your HTML file
5. When the user clicks the button: Create an iteration through each of the buttons using foreach
6. Add an event listener to this button, that includes the click event handler and an arrow function.
7. Create the function that Randomly selects computer choice
8. Create the playGame function that Plays the game by comparing user_choice to computer_choice, and displays a message in the HTML field.
9. Initialize the round, countuser, and countComputer to 0
10. Add an increment in the playGame function for computer and user accordingly
11. Create a function called round to call the game and play a round
12. Enter arguments for the user and computer
13. Increment the round counter & Update the HTML elements with the round and scores
14. In the eventlistener, Call the playRound function and pass the clicked button
15. If it's the second round, declare the overall winner
16. Create an if statement to Reset values if the game has been played for two rounds
17. Update the HTML elements with the round and scores
