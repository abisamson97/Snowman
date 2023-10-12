// Game Set Up
// 1. Randomly select word/ phrase from array of choices 
// 2. Variable to keep track of guessed letters
// 3. Variable to keep track of incorrect guesses
// 4. Max number of guesses 8
// 5. Accept words or phrases in guess
// 6. Display blanks for letters
// 7. Display guessed letters off to the side 

// Game Play
// 5. if (incorrect guesses < max guesses)
//    6. Prompt player to guess another letter
//    7. Validate input is a letter or phrase:
//    8. If it is an incorrect guess:
//       9. Display an addition of snowman being added 
//       10. Loop through steps 6-9
// 11. if else (word/ phrase is guessed w/input)
//    12. Notify player has won the game 
// 13. else (incorrect guesses > max guesses)
//    14. Display snowman completed
//    15. Notify the player has lost the game

// End of Game
// 16. Display end of game screen
// 17.Prompt question asking if player wants to play again
//    18. Yes: start game from step 1
//    19. No: main screen

// create an array for game words
const words = ["freezing", "snowball", "sledding", "penguin", "blizzard", "toboggan", "fireplace", "flannels", "pinecones", "snowflakes", "icicle" ]

// create an array for snowman
const bodyParts = [ "nose", "left-eye", "right-eye", "head", "left-arm", "right-arm", "button1", "button2", "body"];

// add variables to keep track of guesses 
const maxGuesses = 9;
let incorrectGuesses = 0;

// create variable to store random word and letters
let selectedWord = "";
let guessedLetters = [];

// add function to pick randomly from the array
function getRandomWord() {
    const numberSelector = Math.floor(Math.random() * words.length);
    return words[numberSelector];
}

// add function that displays the word as underscores
// let wordDisplay = document.getElementById("word-display").textContent
function displayBlanks() {
    selectedWord = getRandomWord();
    guessedLetters = [];
    const blanks = selectedWord.replace(/[a-zA-Z]/g, " _ ");
    document.getElementById("word-display").textContent = blanks;
}

// add function that executes letter clicks
function letterClick(evt) {
        const selectedLetter = evt.target.textContent.toLowerCase();

        if (!guessedLetters.includes(selectedLetter)) {
            guessedLetters.push(selectedLetter);

            const gameWord = selectedWord.split('').map(letter => {
                if (guessedLetters.includes(letter)) {
                    return letter;
               } else {
                    return '_';
                        }
            }).join(' ');

            document.getElementById("word-display").textContent = gameWord;

            // add if statement to list events that will occur after guessing incorrect or correct
            if (!selectedWord.toLowerCase().includes(selectedLetter)){
                evt.target.classList.add("wrongletter")
                incorrectGuesses++;
                if (incorrectGuesses <= maxGuesses){
                    document.getElementById(bodyParts[incorrectGuesses - 1]).style.display = "none"
                } else {
                    endGame(false);
                }
            } else {
                evt.target.classList.add("rightletter")

                if (!gameWord.includes("_")) {
                    endGame(true);
                }
            }
        }
    };

//create function for end of game
const winner = document.getElementById("winner-message");
const loser = document.getElementById("loser-message");

function endGame(gameWinner) {
    if (gameWinner) {
        winner.style.display = "grid";
    } else {
        loser.style.display = "grid";
    }
}
const headElement = document.getElementById("head");
const bodyElement = document.getElementById("body");
const noseElement = document.getElementById("nose");
const leftEye = document.getElementById("left-eye");
const rightEye = document.getElementById("right-eye");
const leftArm = document.getElementById("left-arm");
const rightArm = document.getElementById("right-arm");
const buttonOne = document.getElementById("button1");
const buttonTwo = document.getElementById("button2");
const alphabet = document.querySelectorAll(".letter");
// create function to reset game 
function resetGame() {
    guessedLetters = [];
    selectedWord = "";
    incorrectGuesses = 0;
    displayBlanks();
    headElement.style.display = "grid";
    bodyElement.style.display = "grid";
    noseElement.style.display = "grid";
    leftEye.style.display = "grid";
    rightEye.style.display = "grid";
    leftArm.style.display = "grid";
    rightArm.style.display = "grid";
    buttonOne.style.display = "grid";
    buttonTwo.style.display = "grid";
    winner.style.display = "none";
    loser.style.display = "none";
    alphabet.forEach(letter => {
        letter.classList.remove("rightletter");
        letter.classList.remove("wrongletter");
    }) 
};


// create event clicker for each letter

const letters = document.querySelectorAll('.letter');
letters.forEach(function(letter) {
    letter.addEventListener('click', letterClick);
});

// add event clicker for start button
const startButton = document.getElementById("start");

startButton.addEventListener('click', function(evt) {
    resetGame();
    evt.preventDefault();
    console.log(selectedWord);
});

// displayBlanks();




