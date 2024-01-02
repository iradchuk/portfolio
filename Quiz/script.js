const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            {text: 'Paris', correct: true},
            {text: 'Berlin', correct: false},
            {text: 'London', correct: false},
            {text: 'Madrid', correct: false}
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            {text: 'Mars', correct: true},
            {text: 'Jupiter', correct: false},
            {text: 'Venus', correct: false},
            {text: 'Saturn', correct: false}
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            {text: 'Elephant', correct: false},
            {text: 'Blue Whale', correct: true},
            {text: 'Giraffe', correct: false},
            {text: 'Lion', correct: false}
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            {text: 'Charles Dickens', correct: false},
            {text: 'William Shakespeare', correct: true},
            {text: 'Jane Austen', correct: false},
            {text: 'Mark Twain', correct: false}
        ]
    },
    {
        question: "What is the square root of 64?",
        answers: [
            {text: '6', correct: false},
            {text: '8', correct: true},
            {text: '10', correct: false},
            {text: '12', correct: false}
        ]
    }
];

const questionTitle = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionTitle.innerHTML = questionNumber + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = 'none';
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectButton = e.target;
    const isCorrect = e.target.dataset.correct === 'true';
    if (isCorrect) {
        selectButton.classList.add('correct');
        score ++;
    } else {
        selectButton.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    })
    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionTitle.innerHTML = `Your Score ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}   

function handleNextButton() {
    currentQuestionIndex ++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', ()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz() 
