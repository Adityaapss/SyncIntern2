const questions = [
    {
        question: "What language is known as the 'mother of all programming languages'?",
        choices: ["C++", "Python", "Fortran", "Assembly"],
        correctAnswer: "Fortran"
    },
    {
        question: "What programming language is used to create web pages?",
        choices: ["JavaScript", "Java", "C#", "HTML"],
        correctAnswer: "HTML"
    },
    {
        question: "Which of the following data types is used to store a sequence of characters in Python?",
        choices: ["int", "list", "string","float"],
        correctAnswer: "string"
     },
    {
        question: "In Java, which keyword is used to explicitly throw an exception?",
        choices: ["raise","catch", "throws","try"],
        correctAnswer: "throws"
    },
    {
        question: "A technique used to call a function from within the same function is called:",
        choices: ["Iteration", "Looping","Recursion","Jumping"],
        correctAnswer: "Recursion"
    }
    // Add more questions here...
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    
    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";
    
    questions[currentQuestion].choices.forEach(function(choice) {
        const input = document.createElement("input");
        input.type = "checkbox";
        input.name = "option";
        input.value = choice;
        choicesElement.appendChild(input);
        
        const label = document.createElement("label");
        label.textContent = choice;
        choicesElement.appendChild(label);
        choicesElement.appendChild(document.createElement("br"));
    });
}

function checkAnswer() {
    const selectedOptions = document.querySelectorAll('input[name="option"]:checked');
    let selectedAnswer = [];
    selectedOptions.forEach(function(option) {
        selectedAnswer.push(option.value);
    });
    
    const correctAnswer = questions[currentQuestion].correctAnswer;
    
    if (selectedAnswer.length === 1 && selectedAnswer[0] === correctAnswer) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    const quizElement = document.getElementById("quiz");
    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");
    
    quizElement.style.display = "none";
    resultElement.style.display = "block";
    scoreElement.textContent = `${score} out of ${questions.length}`;
}

document.getElementById("submit").addEventListener("click", checkAnswer);
displayQuestion();
