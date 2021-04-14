var correct = document.querySelectorAll(".right");
var incorrect = document.querySelectorAll(".wrong");
rightAnswer = 0;
wrongAnswer = 0;
var questionArray = document.querySelectorAll(".question");
var question = -1;
var timeLeft = 60;
var questions = [
  {
    question:
      "Which of the following is true about variable naming conventions in JavaScript?",
    choices: [
      "JavaScript variable names must begin with a letter or the underscore character",
      "JavaScript variable names are case sensitive",
      "Both of the above",
    ],
    correct: "Both of the above",
  },
  {
    question:
      "Which of the following function of String object returns the calling string value converted to upper case?",
    choices: ["toLocaleUpperCase()", "toUpperCase()", "toString()"],
    correct: "toUpperCase()",
  },
  {
    question: "What is my middle name?",
    choices: ["Alfred", "Christopher", "Francis"],
    correct: "Francis",
  },
  {
    question: "What are variables used for in JavaScript Programs?",
    choices: [
      "Storing numbers, dates, or other values",
      "Varying randomly",
      "None of the above",
    ],
    correct: "Storing numbers, dates, or other values",
  },
];
// Grab the button element in the javascript.
var startButton = document.getElementById("start-button");
var displayTimer = document.getElementById("display-timer");
// Have a function for when I click the button it does something.
startButton.addEventListener("click", function () {
  startButton.classList.add("hide");
  timer = setInterval(countdown, 1000);
});

function countdown() {
  timeLeft--;
  displayTimer.textContent = "Time Left: " + timeLeft;
  if (timeLeft <= 0) {
    console.log("Game Over");
    clearInterval(timer);
  }
}

questionArray.forEach(function (element) {
  element.style.display = "none";
});

startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  countdown();
  showQuestions();
});
incorrect.forEach(function (element) {
  element.addEventListener("click", incorrectAnswer);
});

correct.forEach(function (element) {
  element.addEventListener("click", correctAnswer);
});

function showQuestions() {
  if (Question >= 0) {
    questionArray[Question].style.display = "none";
  }
  if (Question < questionArr.length - 1) {
    Question++;
    questionArray[Question].style.display = "block";
  } else {
    console.log("rightAnswer, wrongAnswer", rightAnswer, wrongAnswer);
    clearInterval(timer);
    showScore();
  }
}

function incorrectAnswer() {
  wrongAnswer++;
  timerLeft = timerLeft - 5;
  displayQuestions();
}
function correctAnswer() {
  rightAnswer++;

  showQuestions();
}
