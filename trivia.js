const categorySelection = document.getElementById('category-selection');
const questionScreen = document.getElementById('question-screen');
const answerScreen = document.getElementById('answer-screen');
const allQuestionsScreen = document.getElementById('all-questions-screen');
const questionElement = document.getElementById('question');
const options = document.querySelectorAll('.option');
const answerResult = document.getElementById('answer-result');
const theQuestionElement = document.getElementById('the-question'); // Use the correct ID
const correctAnswerElement = document.getElementById('correct-answer');
const backToCategoriesButton = document.getElementById('back-to-categories');
const backToCategoriesFromQuestionsButton = document.getElementById('back-to-categories-from-questions');
const categoriesContainer = document.getElementById('categories');
const funFactElement = document.getElementById('fun-fact');
const questionsByCategoryContainer = document.getElementById('questions-by-category');

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

    // Screen transitions
    categorySelection.style.display = 'none';
    questionScreen.style.display = 'block';
    answerScreen.style.display = 'none';
    allQuestionsScreen.style.display = 'none';
}

// Show a question (modified to handle starting from a specific question)
function showQuestion(questions, questionIndex = null) {
    let randomIndex;
    if (questionIndex !== null) {
        // Use the provided questionIndex
        randomIndex = questionIndex;
    } else {
        // Generate a random index if no questionIndex is provided
        randomIndex = Math.floor(Math.random() * questions.length);
    }

    currentQuestion = questions[randomIndex];
    questionElement.textContent = currentQuestion.question;

    const allOptions = [...currentQuestion.incorrectAnswers, currentQuestion.correctAnswer];
    shuffleArray(allOptions);

    options.forEach((option, index) => {
        option.textContent = allOptions[index];
        option.onclick = checkAnswer;
        option.classList.remove('incorrect'); // Reset button styles
    });
}

// Check the answer
function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;

    // Screen transitions
    questionScreen.style.display = 'none';
    answerScreen.style.display = 'block';
    categorySelection.style.display = 'none';
    allQuestionsScreen.style.display = 'none';

    if (selectedAnswer === currentQuestion.correctAnswer) {
        answerResult.textContent = 'Correct!';
        answerResult.classList.remove('incorrect');

        // Play the correct sound
        const correctSound = document.getElementById('correct-sound');
        correctSound.play(); 
    } else {
        answerResult.textContent = 'Incorrect!';
        event.target.classList.add('incorrect');
        answerResult.classList.add('incorrect');

        // Play the incorrect sound
        const incorrectSound = document.getElementById('incorrect-sound');
        incorrectSound.play(); 
    }

    theQuestionElement.textContent = currentQuestion.question;
    correctAnswerElement.textContent = currentQuestion.correctAnswer;
    funFactElement.textContent = currentQuestion.funFact;
}

// Back to categories
backToCategoriesButton.addEventListener('click', () => {
    answerScreen.style.display = 'none';
    categorySelection.style.display = 'block';
    allQuestionsScreen.style.display = 'none';

    // Reset button styles
    options.forEach(option => {
        option.classList.remove('incorrect');
    });
});

// Back to categories from all questions screen
backToCategoriesFromQuestionsButton.addEventListener('click', () => {
    allQuestionsScreen.style.display = 'none';
    categorySelection.style.display = 'block';
    questionScreen.style.display = 'none';
    answerScreen.style.display = 'none';
});

// Shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to display all questions by category
function displayAllQuestions() {
    const questionsByCategory = {};
    questions.forEach(question => {
        if (!questionsByCategory[question.category]) {
            questionsByCategory[question.category] = [];
        }
        questionsByCategory[question.category].push(question);
    });

    let questionsHTML = '';
    for (const category in questionsByCategory) {
        questionsHTML += `<h3>${category}</h3>`;
        questionsHTML += '<ol>'; // Use <ol> for ordered list
        questionsByCategory[category].forEach((question, index) => {
            questionsHTML += `<li class="question-link" data-category="${question.category}" data-question-index="${index}">${question.question}</li>`; 
        });
        questionsHTML += '</ol>'; 
    }

    questionsByCategoryContainer.innerHTML = questionsHTML;


    // Add event listeners to question links
    document.querySelectorAll('.question-link').forEach(link => {
        link.addEventListener('click', () => {
            const category = link.dataset.category;
            const questionIndex = parseInt(link.dataset.questionIndex, 10);
            startQuizFromQuestion(category, questionIndex);
        });
    });

    // Screen transitions
    allQuestionsScreen.style.display = 'block';
    categorySelection.style.display = 'none';
    questionScreen.style.display = 'none';
    answerScreen.style.display = 'none';
}

// Function to start the quiz from a specific question
function startQuizFromQuestion(category, questionIndex) {
    const categoryQuestions = questions.filter(q => q.category === category);
    showQuestion(categoryQuestions, questionIndex); // Pass questionIndex to showQuestion

    // Screen transitions
    allQuestionsScreen.style.display = 'none';
    categorySelection.style.display = 'none';
    questionScreen.style.display = 'block';
    answerScreen.style.display = 'none';
}

// Event listener for "View All Questions" link
document.getElementById('view-all-questions').addEventListener('click', displayAllQuestions);
