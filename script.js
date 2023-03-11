// Create a Quiz App using JavaScript, HTML and CSS. The app should have the following features:
// The user will be able to select a diffuculty level
// (easy, medium, hard) based on the difficulty level the user will be presented with a different number of questions.
// Fetch the images of pokemon from the pokeapi.co API.
// Fetch the index of the pokemon from the pokeapi.co API.
// then, display a question based on an image and 4 possible answers.
// The user will select an answer and then move onto the next question.
// The quiz will end when all the user has answered all the questions.

// Difficulty level
// Easy: 10 questions
// Medium: 15 questions
// Hard: 20 questions

const easyButton = document.querySelector('[data-easy]');
const mediumButton = document.querySelector('[data-medium]');
const hardButton = document.querySelector('[data-hard]');

let userScore = document.querySelector('[data-score]');
let question = document.querySelector('[data-question]');
let pokemonImage = document.querySelector('[data-image]');

const answerButtons = document.querySelectorAll('[data-answer]');
const nextButton = document.querySelector('[data-next]');
const restartButton = document.querySelector('[data-restart]');
const main = document.querySelector('.gameContainer');

let gameData;
userScore = 0;
question = "";

easyButton.addEventListener('click', fetchData);

async function fetchData() {
   gameData = await window.getPokeData();
}
//Using Object Mapping, spread operator, and array methods to slice an array based on the difficulty button clicked.

// [...document.getElementsByClassName('startGame')].forEach(function(buttons) {
//    // Adds an event listener to each button
//    buttons.addEventListener('click', function() {
//       //this.id is the id of the button clicked 
//       //difficultyButtons is an object that maps the id of the button to a function
//       difficultyButtons[this.id]();

//    })
// })

// const difficultyButtons = {
//    easy: async function() {
//       console.log('easy');
//       //slice the array to get the first 10 pokemon
//    },
//    medium: async function() {
//       console.log('medium');
//       // slice the array to get the first 15 pokemon
//    },
//    hard: async function() {
//       console.log('hard');
//       // slice the array to get the first 20 pokemon
//    }
// }