const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionNumberSpan = document.getElementById("current-qustion");
const scoreSpan = document.getElementById("score-span");
const resultScoreSpan = document.getElementById("score-span-result");
const totalQuestionSpan = document.getElementById("total-question");
const maxQuestionSpan = document.getElementById("max-question-span");
const questionEl = document.getElementById("question");
const scoreRemarksEl = document.getElementById("score-remarks");
const answersContainer = document.querySelector(".answers-container");
const progressEL = document.querySelector(".progress");
const resultButton = document.querySelector(".result-btn");

const quizQuestion = [
  {
    question:
      " I am an odd number. Take away one letter and I become even. What number am I?",
    answer: [
      { text: "Seven", correct: "true" },
      { text: " Five", correct: "false" },
      { text: "Nine", correct: "false" },
      { text: " Three", correct: "false" },
    ],
  },
  {
    question: "What is the next number in the pattern: 2, 4, 8, 16, ___?",
    answer: [
      { text: " 18", correct: "false" },
      { text: "24", correct: "false" },
      { text: "32", correct: "true" },
      { text: "30", correct: "false" },
    ],
  },
  {
    question: "If two pencils cost GH₵10, how much do five pencils cost?",
    answer: [
      { text: "GH₵20", correct: "false" },
      { text: "GH₵25", correct: "true" },
      { text: "GH₵30", correct: "false" },
      { text: "GH₵15", correct: "false" },
    ],
  },
  {
    question: " Which number is divisible by both 2 and 5?",
    answer: [
      { text: "15", correct: "false" },
      { text: "20", correct: "true" },
      { text: "33", correct: "false" },
      { text: "47", correct: "false" },
    ],
  },
  {
    question: " What is half of 100 plus 10?",
    answer: [
      { text: "40", correct: "false" },
      { text: "50", correct: "false" },
      { text: "60", correct: "true" },
      { text: "70", correct: "false" },
    ],
  },
  {
    question:
      ". A clock shows 3:00. What is the angle between the hour hand and minute hand?",
    answer: [
      { text: " 45°", correct: "false" },
      { text: " 90°", correct: "true" },
      { text: " 120°", correct: "false" },
      { text: " 180°", correct: "false" },
    ],
  },
  {
    question: "Which number comes next: 1, 1, 2, 3, 5, 8, ___?",
    answer: [
      { text: " 10", correct: "false" },
      { text: " 11", correct: "false" },
      { text: " 13", correct: "true" },
      { text: " 15", correct: "false" },
    ],
  },
  {
    question: " If a triangle has angles 50° and 60°, what is the third angle?",
    answer: [
      { text: "70", correct: "true" },
      { text: "80", correct: "false" },
      { text: "90", correct: "false" },
      { text: "1000", correct: "false" },
    ],
  },
  {
    question: "  What is 15% of 200?",
    answer: [
      { text: "20", correct: "false" },
      { text: "25", correct: "false" },
      { text: "30", correct: "true" },
      { text: "35", correct: "false" },
    ],
  },
  {
    question: "Which number is a prime number?",
    answer: [
      { text: "21", correct: "false" },
      { text: "39", correct: "false" },
      { text: "17", correct: "true" },
      { text: "27", correct: "false" },
    ],
  },
  {
    question: "A farmer has 12 cows. All but 7 die. How many are left?",
    answer: [
      { text: "5", correct: "false" },
      { text: "7", correct: "true" },
      { text: "12", correct: "false" },
      { text: "19", correct: "false" },
    ],
  },
  {
    question: " What is the square root of 144?",
    answer: [
      { text: "10", correct: "false" },
      { text: "11", correct: "false" },
      { text: "12", correct: "true" },
      { text: "13", correct: "false" },
    ],
  },
  {
    question: " Which fraction is largest?",
    answer: [
      { text: "1/2", correct: "false" },
      { text: "2/3", correct: "true" },
      { text: "3/5", correct: "false" },
      { text: "4/7", correct: "false" },
    ],
  },
  {
    question: " If x + 5 = 12, what is x?",
    answer: [
      { text: "5", correct: "false" },
      { text: "6", correct: "false" },
      { text: "7", correct: "true" },
      { text: "8", correct: "false" },
    ],
  },
  {
    question: " What is the perimeter of a square with side 6 cm?",
    answer: [
      { text: "12cm", correct: "false" },
      { text: "18cm", correct: "false" },
      { text: "36cm", correct: "false" },
      { text: "24cm", correct: "true" },
    ],
  },
  {
    question: "  If 3x = 27, what is x?",
    answer: [
      { text: "6", correct: "false" },
      { text: "7", correct: "false" },
      { text: "8", correct: "false" },
      { text: "9", correct: "true" },
    ],
  },
  {
    question: "What is the value of 2² + 3²?",
    answer: [
      { text: "10", correct: "false" },
      { text: "13", correct: "true" },
      { text: "12", correct: "false" },
      { text: "15", correct: "false" },
    ],
  },
  {
    question: "  A car travels 240 km in 4 hours. What is its speed?",
    answer: [
      { text: "40 km/h", correct: "false" },
      { text: "50 km/h", correct: "false" },
      { text: "60 km/h", correct: "true" },
      { text: "70 km/h", correct: "false" },
    ],
  },
  {
    question: "  Which number is missing: 5, 10, 20, 40, ___?",
    answer: [
      { text: "50", correct: "false" },
      { text: "60", correct: "false" },
      { text: "70", correct: "false" },
      { text: "80", correct: "true" },
    ],
  },
  {
    question:
      " What is the area of a rectangle with length 8 cm and width 5 cm?",
    answer: [
      { text: " 13 cm²", correct: "false" },
      { text: " 26 cm²", correct: "false" },
      { text: "40 cm²", correct: "true" },
      { text: "45 cm²", correct: "false" },
    ],
  },
  {
    question:
      "  If 5 workers can complete a task in 12 days, how many days will 10 workers take?",
    answer: [
      { text: "4", correct: "false" },
      { text: "5", correct: "false" },
      { text: "6", correct: "true" },
      { text: "7", correct: "false" },
    ],
  },
  {
    question: "Solve: 7 + 6 x 2",
    answer: [
      { text: "26", correct: "false" },
      { text: "19", correct: "true" },
      { text: "20", correct: "false" },
      { text: "14", correct: "false" },
    ],
  },
  {
    question:
      "  What is the probability of getting a head when tossing a fair coin?",
    answer: [
      { text: "1/4", correct: "false" },
      { text: " 1/3", correct: "false" },
      { text: "1/2", correct: "true" },
      { text: "1", correct: "false" },
    ],
  },
  {
    question:
      "  The sum of three consecutive numbers is 72. What is the middle number?",
    answer: [
      { text: "22", correct: "false" },
      { text: "23", correct: "false" },
      { text: "24", correct: "true" },
      { text: "25", correct: "false" },
    ],
  },
  {
    question: " Which is equivalent to 0.75?",
    answer: [
      { text: "1/2", correct: "false" },
      { text: "2/3", correct: "false" },
      { text: " 4/5", correct: "false" },
      { text: "3/4", correct: "true" },
    ],
  },
  {
    question: " What is the next number: 1, 4, 9, 16, 25, ___?",
    answer: [
      { text: "30", correct: "false" },
      { text: "35", correct: "false" },
      { text: "36", correct: "true" },
      { text: "39", correct: "false" },
    ],
  },
  {
    question:
      "  A shop reduces the price of GH₵200 by 20%. What is the new price?",
    answer: [
      { text: " GH₵160", correct: "true" },
      { text: " GH₵170", correct: "false" },
      { text: " GH₵180", correct: "false" },
      { text: " GH₵190", correct: "false" },
    ],
  },
  {
    question:
      " If the ratio of boys to girls is 3:2 and there are 15 boys, how many girls are there?",
    answer: [
      { text: "8", correct: "false" },
      { text: "10", correct: "true" },
      { text: "12", correct: "false" },
      { text: "15", correct: "false" },
    ],
  },
  {
    question: " What is the value of π rounded to two decimal places?",
    answer: [
      { text: "3.12", correct: "false" },
      { text: "3.14", correct: "true" },
      { text: " 3.16", correct: "false" },
      { text: "3.18", correct: "false" },
    ],
  },
  {
    question: "  Find the missing number: 2, 6, 12, 20, ___?",
    answer: [
      { text: "28", correct: "false" },
      { text: "30", correct: "true" },
      { text: "32", correct: "false" },
      { text: "34", correct: "false" },
    ],
  },
  {
    question:
      " If 4 pens and 2 books cost GH₵40, and books cost GH₵10 each, what is the cost of one pen?",
    answer: [
      { text: " GH₵5", correct: "true" },
      { text: " GH₵6", correct: "false" },
      { text: " GH₵4", correct: "false" },
      { text: " GH₵3", correct: "false" },
    ],
  },
  {
    question: "  Solve for y: 2y - 6 = 10",
    answer: [
      { text: "5", correct: "false" },
      { text: "6", correct: "false" },
      { text: "7", correct: "false" },
      { text: "8", correct: "true" },
    ],
  },
  {
    question: "  A number multiplied by itself gives 169. What is the number?",
    answer: [
      { text: "11", correct: "false" },
      { text: "12", correct: "false" },
      { text: "13", correct: "true" },
      { text: "14", correct: "false" },
    ],
  },
  {
    question: " Which angle is greater than 90° but less than 180°?",
    answer: [
      { text: " Acute angle", correct: "false" },
      { text: "Right angle", correct: "false" },
      { text: "Obtuse angle", correct: "true" },
      { text: "Reflex angle", correct: "false" },
    ],
  },
  {
    question: " If x² - 9 = 0, what are the values of x?",
    answer: [
      { text: " 3 only", correct: "false" },
      { text: "-3 only", correct: "false" },
      { text: " 3 and -3", correct: "true" },
      { text: " 9 and -9", correct: "false" },
    ],
  },
  {
    question:
      " A father is 3 times as old as his son. In 10 years, he will be twice as old. If the son is x years now, what is x?",
    answer: [
      { text: "5", correct: "false" },
      { text: "10", correct: "true" },
      { text: "15", correct: "false" },
      { text: "20", correct: "false" },
    ],
  },
  {
    question: " What is the value of 5! ?",
    answer: [
      { text: "25", correct: "false" },
      { text: "60", correct: "false" },
      { text: "100", correct: "false" },
      { text: "120", correct: "true" },
    ],
  },
  {
    question: "  Solve: 2x + 3 = 15",
    answer: [
      { text: "4", correct: "false" },
      { text: "5", correct: "false" },
      { text: "6", correct: "true" },
      { text: "7", correct: "false" },
    ],
  },
  {
    question:
      "  The hypotenuse of a right triangle is 13 cm and one side is 5 cm. What is the other side?",
    answer: [
      { text: "12 cm", correct: "true" },
      { text: "13 cm", correct: "false" },
      { text: "10 cm", correct: "false" },
      { text: "15 cm", correct: "false" },
    ],
  },
  {
    question: " What is the next number: 3, 6, 11, 18, 27, ___?",
    answer: [
      { text: "36", correct: "false" },
      { text: "38", correct: "true" },
      { text: "40", correct: "false" },
      { text: "42", correct: "false" },
    ],
  },
  {
    question:
      " A bag contains 5 red balls and 3 blue balls. What is the probability of picking a blue ball?",
    answer: [
      { text: " 3/5", correct: "false" },
      { text: "3/8", correct: "true" },
      { text: "5/8", correct: "false" },
      { text: "1/2", correct: "false" },
    ],
  },
  {
    question: " What is the sum of the interior angles of a pentagon?",
    answer: [
      { text: "540°", correct: "true" },
      { text: "450°", correct: "false" },
      { text: "360°", correct: "false" },
      { text: "720°", correct: "false" },
    ],
  },
  {
    question: " If x + 5 = 12, what is x?",
    answer: [
      { text: "5", correct: "false" },
      { text: "6", correct: "false" },
      { text: "7", correct: "true" },
      { text: "8", correct: "false" },
    ],
  },
  {
    question: "  If log₁₀(1000) = ?",
    answer: [
      { text: "10", correct: "false" },
      { text: "2", correct: "false" },
      { text: "3", correct: "true" },
      { text: "100", correct: "false" },
    ],
  },
  {
    question: " What is the value of 2³ x 2²?",
    answer: [
      { text: "16", correct: "false" },
      { text: "32", correct: "true" },
      { text: "7", correct: "false" },
      { text: "8", correct: "false" },
    ],
  },
  {
    question: "A train travels 90 km/h for 2.5 hours. How far does it travel?",
    answer: [
      { text: "180 km", correct: "false" },
      { text: "200 km", correct: "false" },
      { text: "225 km", correct: "true" },
      { text: "250", correct: "false" },
    ],
  },
  {
    question: "  Solve: (x/3) + 4 = 10",
    answer: [
      { text: "12", correct: "false" },
      { text: "15", correct: "false" },
      { text: "18", correct: "true" },
      { text: "21", correct: "false" },
    ],
  },
  {
    question: " Which number is irrational?",
    answer: [
      { text: " 1/2", correct: "false" },
      { text: "√2", correct: "true" },
      { text: " 0.75", correct: "false" },
      { text: "5", correct: "false" },
    ],
  },
  {
    question: " If the average of 5 numbers is 20, what is their total sum?",
    answer: [
      { text: "50", correct: "false" },
      { text: "75", correct: "false" },
      { text: "100", correct: "true" },
      { text: "120", correct: "false" },
    ],
  },
  {
    question:
      " A number is divided by 4 and the remainder is 3. Which number could it be?",
    answer: [
      { text: "20", correct: "false" },
      { text: "24", correct: "false" },
      { text: "27", correct: "true" },
      { text: "32", correct: "false" },
    ],
  },
];

let score = 0;
let currentQuestionIndex = 0;
let answersDisabled = false;
totalQuestionSpan.textContent = quizQuestion.length;
// maxQuestionSpan.textContent = quizQuestion.length;
startButton.addEventListener("click", startquiz);
resultButton.addEventListener("click", restartquiz);
function startquiz() {
  score = 0;
  currentQuestionIndex = 0;
  scoreSpan.textContent = score;
  startScreen.classList.remove("active");
  questionScreen.classList.add("active");
  showquestion();
}
function showquestion() {
  answersDisabled = false;
  let currentQuestion = quizQuestion[currentQuestionIndex];
  questionNumberSpan.textContent = currentQuestionIndex + 1;
  let progressPercent = (currentQuestionIndex / quizQuestion.length) * 100;
  progressEL.style.width = progressPercent + "%";
  questionEl.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";
  currentQuestion.answer.forEach((answer) => {
    let button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", correctanswer);
    answersContainer.appendChild(button);
  });
}
function correctanswer(e) {
  if (answersDisabled) {
    return;
  }
  answersDisabled = true;
  let selectedBtn = e.target;
  let isCorrectAnswer = selectedBtn.dataset.correct === "true";
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedBtn) {
      button.classList.add("incorrect");
    }
  });
  if (isCorrectAnswer) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestion.length) {
      showquestion();
    } else {
      showresult();
    }
  }, 1000);
}
function showresult() {
  resultScreen.classList.add("active");
  questionScreen.classList.remove("active");
  let calScore = (score / quizQuestion.length) * 100;
  // resultScoreSpan.textContent = score
  resultScoreSpan.textContent = Math.floor(calScore) + "%";
  if (calScore == 100) {
    scoreRemarksEl.textContent = "Perfect!,you are genius ";
  } else if (calScore >= 80) {
    scoreRemarksEl.textContent = "Excellent!,keep it up ";
  } else if (calScore >= 70) {
    scoreRemarksEl.textContent = "Very Good!,keep learning ";
  } else if (calScore >= 60) {
    scoreRemarksEl.textContent = "Good Effort!,there us more for improvement ";
  } else if (calScore >= 50) {
    scoreRemarksEl.textContent = "Not bad!,try again to improve  ";
  } else if (calScore >= 40) {
    scoreRemarksEl.textContent = "keep studying!, you will get better";
  } else if (calScore >= 0) {
    scoreRemarksEl.textContent = "You have to take your lesson seriously";
  }
}
function restartquiz() {
  startScreen.classList.add("active");
  resultScreen.classList.remove("active");
}
