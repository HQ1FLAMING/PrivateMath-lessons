const questions = [
    {
        question: "What is an interval?",
        answers: [
            { text: "a subset of rational numbers", correct: false},
            { text: "a subset of real numbers", correct: true},
            { text: "a subset of irrational numbers", correct: false},
            { text: "a subset of integers numbers", correct: false},
        ]
    },
    {
        question: "The irrational number between 2 and 3 is....",
        answers: [
            { text: "root 10", correct: false},
            { text: "root 7", correct: true},
            { text: "2.5", correct: false},
            { text: "root 3", correct: false},
        ]
    },
    {
        question: "root 10 approximately equal to...",
        answers: [
            { text: "2.99", correct: false},
            { text: "3.71", correct: true},
            { text: "3", correct: false},
            { text: "-3.2", correct: false},
        ]
    },
    {
        question: "The set of non negative real numbers = ...?",
        answers: [
            { text: "R-U{0}", correct: false},
            { text: "R+U{0}", correct: true},
            { text: "]- infinity, infinity[", correct: false},
            { text: "]0 , infinity[", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect =selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();