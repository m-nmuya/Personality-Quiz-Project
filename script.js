/*Add your JavaScript here*/

var darkScore = 0; // Store the dark academia score
var indieScore = 0; // Store the indie score
var y2kScore = 0; // Store the y2k academia score
var grungeScore = 0; // Store the grunge score

var questionCount = 0; // Store the number of answers clicked on

// Store HTML elements using the DOM
var result = document.getElementById("result");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
var q7a4 = document.getElementById("q7a4");

var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");
var q8a3 = document.getElementById("q8a3");
var q8a4 = document.getElementById("q8a4");

// Listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", dark);
q1a2.addEventListener("click", grunge);
q1a3.addEventListener("click", y2k);
q1a4.addEventListener("click", indie);

q2a1.addEventListener("click", dark);
q2a2.addEventListener("click", grunge);
q2a3.addEventListener("click", y2k);
q2a4.addEventListener("click", indie);

q3a1.addEventListener("click", indie);
q3a2.addEventListener("click", grunge);
q3a3.addEventListener("click", dark);
q3a4.addEventListener("click", y2k);

q4a1.addEventListener("click", indie);
q4a2.addEventListener("click", grunge);
q4a3.addEventListener("click", dark);
q4a4.addEventListener("click", y2k);

q5a1.addEventListener("click", y2k);
q5a2.addEventListener("click", indie);
q5a3.addEventListener("click", dark);
q5a4.addEventListener("click", grunge);

q6a1.addEventListener("click", indie);
q6a2.addEventListener("click", grunge);
q6a3.addEventListener("click", dark);
q6a4.addEventListener("click", y2k);

q7a1.addEventListener("click", indie);
q7a2.addEventListener("click", y2k);
q7a3.addEventListener("click", grunge);
q7a4.addEventListener("click", dark);

q8a1.addEventListener("click", y2k);
q8a2.addEventListener("click", grunge);
q8a3.addEventListener("click", dark);
q8a4.addEventListener("click", indie);

// Listen for click on restart button and call function if clicked
restart.addEventListener("click", restartQuiz);


// Track dark academia score and check if quiz is complete
function dark() {
  darkScore += 1; 
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "darkScore = " + darkScore);

  if (questionCount == 8) {
    console.log("The quiz is done!")
    displayResult();
  }

}

// Track indie score and check if quiz is complete
function indie() {
  indieScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "indieScore = " + indieScore);

  if (questionCount == 8) {
    console.log("The quiz is done!")
    displayResult();
  }

}

// Track y2k score and check if quiz is complete
function y2k() {
  y2kScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "y2kScore = " + y2kScore);

  if (questionCount == 8) {
    console.log("The quiz is done!")
    displayResult();
  }

}

// Track grunge score and check if quiz is complete
function grunge() {
  grungeScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "grungeScore = " + grungeScore);

  if (questionCount == 8) {
    console.log("The quiz is done!")
    displayResult();
  }

}

function displayResult() {
if (darkScore >= 3) {
  result.innerHTML = "Dark Academia!";
  console.log("Dark Academia!")
} else if (indieScore >= 3) {
  result.innerHTML = "Indie!";
  console.log("Indie!")
}else if (y2kScore >= 3) {
  result.innerHTML = "Y2K!";
  console.log("Y2K!")
}else if (grungeScore >= 3) {
  result.innerHTML = "Grunge!";
  console.log("Grunge!")
}
}

// Update quiz result
result.addEventListener("click", displayResult);

function restartQuiz() {
  result.innerHTML = "You are a...";
  questionCount = 0;
  darkScore = 0;
  indieScore = 0;
  y2kScore = 0;
  grungeScore = 0;
  console.log("questionCount = " + questionCount + "\t" + "indieScore = " + indieScore + "\t" + "darkScore = " + darkScore + "\t" + "grungeScore = " + grungeScore + "\t" + "y2kScore = " + y2kScore);
}
