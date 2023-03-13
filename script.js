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

let gameData;
let userScore = document.querySelector('[data-user-score]');
userScore.dataset = 0;
let question = document.querySelector('[data-current-question]');
question.dataset = "";
let pokemonImage = document.querySelector('[data-image]');
const nextButton = document.querySelector('[data-next]');
const restartButton = document.querySelector('[data-restart]');
const main = document.querySelector('.gameContainer');

async function fetchData() {
   gameData = await window.getPokeData();
   showPokemonSilhouette();
   displayChoices();
}

function showPokemonSilhouette() {
   pokemonImage.src = gameData.correct.image;
}

function displayChoices() {
   answerButtons.forEach((button, index) => {
      button.innerText = gameData.pokemonChoices[index].name;
      // Change buttons data-name atttribute to the name of the pokemon
      button.dataset.name = gameData.pokemonChoices[index].name;
   });
}

function gameSetup() {

   gameDifficultyCheck();
   playerChoices();
   // playerResult();
   // restartGame();

   function gameDifficultyCheck(){
      //Using Object Mapping, spread operator, array method
      //Inside the forEach Loop Adds functionality/individuality to the difficulty buttons.
      [...document.querySelectorAll('[data-start-game]')].forEach(function(dbuttons) {
         // Adds an event listener to each button
         dbuttons.addEventListener('click', function() {
            //this.id is the id of the button clicked 
            //difficultyButtons is an object that maps the id of the button to a function
            fetchData();
            difficultyButtons[this.id]();
      
         })
      })
      
      const difficultyButtons = {
         easy: function() {
            console.log('easy');
         },
         medium: function() {
            console.log('medium');
         },
         hard: function() {
            console.log('hard');
         }
      }
   }

   function playerChoices(){
      [...document.querySelectorAll('[data-pokemon-name]')].forEach(function(aButtons) {
         aButtons.addEventListener('click', function() {
            answerButtons[this.id]();
      
         })
      })
      
      const answerButtons = {
         easy: function() {
            console.log('easy');
         },
         medium: function() {
            console.log('medium');
         },
         hard: function() {
            console.log('hard');
         }
      }
   }
}