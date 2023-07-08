// Theodore Ayoub III
// JS file for running wine quiz
// project started July 6, 2023


// variables for all the screens used in the game
const welcomeScreen = document.querySelector('.welcome');
const questionScreen = document.querySelector('.quizQuestions');
const scoreScreen = document.querySelector('.scoreSheet');
const highScoreScreen = document.querySelector('.highScores');

// variables for the buttons
let button1 = document.querySelector("#btn1");
let button2 = document.querySelector("#btn2");
let button3 = document.querySelector("#btn3");
let button4 = document.querySelector("#btn4");
let possibleAnswers = document.querySelector('.answer-container');

// Variables for starting quiz and checking answers
let timerEl = document.getElementById('count-up');
let startEl = document.querySelector('#quizStart');
let questionE1 = document.querySelector('#question');
let resultE1 = document.querySelector('#result');

// Some test quiz questions
var questionsArray =
  [
    {
      question: "Does this question display?",
      choices: ["Yes", "No", "Not yet", "Sometimes"],
      realAnswer: "Yes"
    },

    {
      question: "How about this question?",
      choices: ["It will tomorrow", "No", "Yes", "Yes because you are awesome at coding"],
      realAnswer: "Yes"
    },
    {
      question: "Is this quiz about wine?",
      choices: ["Yes", "No", "wine time", "Maybe"],
      realAnswer: "wine time"
    },
    {
      question: "Is it time for a drink yet?",
      choices: ["Not yet", "No", "Yes", "Always"],
      realAnswer: "Always"
    },
  ];



  // game start button is pressed, welcome screen disappears
  // first quiz question is presented
  startEl.addEventListener("click", function (event) {
  // Prevent default action
  event.preventDefault();

  // hide welcome screen and display question screen
  welcomeScreen.setAttribute("hidden", true);
  questionScreen.setAttribute("hidden", false);
  scoreScreen.setAttribute("hidden", true);
  highScoreScreen.setAttribute("hidden", true);

  // game timer display
  // create function for timing up

  // run question function
  questionDisplay();
  
  });


  // This function prints the questions and answer choices to the screen
  function questionDisplay() {
    console.log("questionDisplay function called");

  };


  // This function checks the answer selection and provides feedback
  function checkingAnswer() {
    console.log("checkingAnswer function called");

  };