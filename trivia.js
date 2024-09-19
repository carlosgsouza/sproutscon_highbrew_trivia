const categorySelection = document.getElementById('category-selection');
const questionScreen = document.getElementById('question-screen');
const answerScreen = document.getElementById('answer-screen');
const questionElement = document.getElementById('question');
const options = document.querySelectorAll('.option');
const answerResult = document.getElementById('answer-result');
const correctAnswerElement = document.getElementById('correct-answer');
const backToCategoriesButton = document.getElementById('back-to-categories');
const categoriesContainer = document.getElementById('categories');
const funFactElement = document.getElementById('fun-fact');

let currentQuestion;

// Get unique categories from questions
const categories = [...new Set(questions.map(q => q.category))];

// Create category buttons dynamically
categories.forEach(category => {
    const button = document.createElement('button');
    button.dataset.category = category;
    button.textContent = category;
    button.addEventListener('click', handleCategoryClick);
    categoriesContainer.appendChild(button);
});

// Category selection handler
function handleCategoryClick(event) {
    const selectedCategory = event.target.dataset.category;
    const filteredQuestions = questions.filter(q => q.category === selectedCategory);
    showQuestion(filteredQuestions);
    categorySelection.style.display = 'none';
    questionScreen.style.display = 'block';
}

// Show a question
function showQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];
    questionElement.textContent = currentQuestion.question;

    const allOptions = [...currentQuestion.incorrectAnswers, currentQuestion.correctAnswer];
    shuffleArray(allOptions);

    options.forEach((option, index) => {
        option.textContent = allOptions[index];
        option.onclick = checkAnswer;
    });
}

// Check the answer
function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    questionScreen.style.display = 'none';
    answerScreen.style.display = 'block';

    if (selectedAnswer === currentQuestion.correctAnswer) {
        answerResult.textContent = 'Correct!';
        answerResult.classList.remove('incorrect'); 
    } else {
        answerResult.textContent = 'Incorrect!';
        event.target.classList.add('incorrect'); 
        answerResult.classList.add('incorrect'); 
    }

    correctAnswerElement.textContent = `The correct answer was: ${currentQuestion.correctAnswer}`;
    funFactElement.textContent = `Fun fact: ${currentQuestion.funFact}`; 
}

// Back to categories
backToCategoriesButton.addEventListener('click', () => {
    answerScreen.style.display = 'none';
    categorySelection.style.display = 'block';

    // Reset button styles when going back to categories
    options.forEach(option => {
        option.classList.remove('incorrect');
    });
});

// Shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}