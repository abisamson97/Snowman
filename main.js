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
const words = ["freezing", "snowball", "sledding", "penguins", "blizzard", "toboggan", "firewood", "flannels", "pinecone"]

// create variable to store random word and letters
let selectedWord = "";
let guessedLetters = [];

// add function to pick randomly from the array
function getRandomWord() {
    const numberSelector = Math.floor(Math.random() * words.length);
    return words[numberSelector];
}

// add function that displays the word as underscores

function displayBlanks() {
    const randomWord = getRandomWord();
    const blanks = randomWord.replace(/[a-zA-Z]/g, "_");
    document.getElementById("worddisplay").textContent = blanks;
}
//create even listener for start button that picks a random word
const startButton = document.getElementById("start");

startButton.addEventListener('click', function(evt) {
    // selectedWord = getRandomWord();
    // guessedLetters = [];
    // addWordDisplay();
    displayBlanks();
    evt.preventDefault();
    console.log(selectedWord);
});

// // add functions to add letters to word display 
// const wordDisplay = document.getElementById("worddisplay");

// function addWordDisplay() {
//     const gameWord = selectedWord.split('').map(letter => {
//         if (guessedLetters.includes(letter)) {
//             return letter;
//         } else {
//             return '_';
//         }
//     }).join(' ');
//     wordDisplay.textContent = gameWord;
// }

// function letterClick(evt) {
//     const selectedLetter = evt.target.textContent;
//     if (!guessedLetters.includes(selectedLetter)) {
//         guessedLetters.push(selectedLetter);
//         addWordDisplay();
//     }
// };
// // create event clicker for each letter

// const letters = document.querySelectorAll('.letter');
// letters.forEach(function(letter) {
//     letter.addEventListener('click', letterClick);
//     });



