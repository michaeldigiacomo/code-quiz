// Create a start button.
var timeLeft = 60;
var questions = [
    {
        question: "What color is the sky?", 
        choices: ["Red", "Blue", "Green"],
        correct: "Blue",
    },
    {
        question: "What color is the sky?", 
        choices: ["Red", "Blue", "Green"],
        correct: "Blue",
    },
    {
        question: "What color is the sky?", 
        choices: ["Red", "Blue", "Green"],
        correct: "Blue",
    },
    {
        question: "What color is the sky?", 
        choices: ["Red", "Blue", "Green"],
        correct: "Blue",
    },
    {
        question: "What color is the sky?", 
        choices: ["Red", "Blue", "Green"],
        correct: "Blue",
    },

];
// Grab the button element in the javascript.
var startButton = document.getElementById("start-button");
var displayTimer = document.getElementById("display-timer");
// Have a function for when I click the button it does something.
startButton.addEventListener("click", function(){
    startButton.classList.add("hide");
    timer=setInterval(countdown, 1000);
})

function countdown() {
    timeLeft --
    displayTimer.textContent = "Time Left: " + timeLeft
    if(timeLeft <= 0 ) {
        console.log("Game Over");
        clearInterval(timer);
    }
} 

