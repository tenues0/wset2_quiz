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
const btns = document.querySelectorAll('button[id^=btn]');
let possibleAnswers = document.querySelector('.answer-container');

// Variables for starting quiz and checking answers
let timerEl = document.getElementById('count-up');
let startEl = document.querySelector('#quizStart');
let questionE1 = document.querySelector('#question');
let resultE1 = document.querySelector('#result');
// create global varible for correctAnswer
let correctAnswer = "starting value for correctAnswer variable";

// Some test quiz questions
const quizQuestions =
  [
    {
      question: "Does this question display?",
      choices: ["Yes", "No", "Not yet", "Sometimes"],
      realAnswer: "Yes"
    },

    {
      question: "How about this question?",
      choices: ["It will tomorrow", "Yes because you are awesome at coding", "Yes", "No"],
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
// welcomeScreen.setAttribute("hidden", true);
// questionScreen.setAttribute("hidden", false);
// scoreScreen.setAttribute("hidden", true);
// highScoreScreen.setAttribute("hidden", true);

// game timer display
// create function for timing up

// run question function
questionDisplay();

});

let i = 0;
// This function prints the questions and answer choices to the screen
function questionDisplay() {
  
  console.log("questionDisplay() function called");
  console.log(i);
  let displayQuestion = quizQuestions[i].question;
  // console.log(displayQuestion);
  questionE1.textContent = displayQuestion;

  // populating the potential answers to the screen
  let answers = quizQuestions[i].choices;
  // console.log(answers);

  // populate buttons with possible answers from answer array
  button1.textContent = answers[0];
  button2.textContent = answers[1];
  button3.textContent = answers[2];
  button4.textContent = answers[3]; 

  // console.log("================================");
  // console.log("new correctAnswer global value");

  correctAnswer = quizQuestions[i].realAnswer;
  // console.log(correctAnswer);
  // passing correctAnswer into checkingAnswer() function
  checkingAnswer(correctAnswer);

};

// This function checks the answer selection and provides feedback
function checkingAnswer(correctAnswer) {
  // console.log("checkingAnswer() function called");
  // console.log("********************************")
  // console.log("testing correctAnswer global variable");
  // console.log(correctAnswer);

  // get answer selection from quiz taker
  // https://stackoverflow.com/questions/49680484/how-to-add-one-event-listener-for-all-buttons
  btns.forEach(btn => {

    btn.addEventListener('click', event => {
         console.log( event.target.id );
         console.log( event.target.textContent );
         // if correct answer is selected, tell use they are correct
         // if correct answer is NOT selected, tell user correct answer
         if (event.target.textContent == correctAnswer) {
          console.log("You choose wisely!")
         } else {
           console.log("You choose poorly")
         }
         i++;
         questionDisplay();

    });

   });

};

// to do list
// I got the buttons to populate and can get the answer selected by the user
// now I need to cycle through the question list