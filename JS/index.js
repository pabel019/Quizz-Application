const questions = [
	{
		question: "Which is the largest animal in the world?",
		answer: [
			{ text: "Shark", correct: false },
			{ text: "Blue Whale", correct: true },
			{ text: "Elephant", correct: false },
			{ text: "Giraffe", correct: false },
		],
	},
	{
		question: "Which is the smallest animal in the world?",
		answer: [
			{ text: "Bee Hummingbird", correct: false },
			{ text: "Paedocypris progenetica", correct: true },
			{ text: "Etruscan Shrew ", correct: false },
			{ text: "Fairyfly ", correct: false },
		],
	},
	{
		question: "Which is the largest desert in the world?",
		answer: [
			{ text: "Gobi", correct: false },
			{ text: "Kalahari", correct: false },
			{ text: "Sahara", correct: false },
			{ text: "Anterctica", correct: true },
		],
	},
	{
		question: "Which is the smallest desert in the world?",
		answer: [
			{ text: "The Great Basin Desert", correct: false },
			{ text: "Carcross Desert", correct: true },
			{ text: "Sechura Desert ", correct: false },
			{ text: "The Ténéré Desert", correct: false },
		],
	},
	{
		question: "Which is the largest continent in the world?",
		answer: [
			{ text: "Asia", correct: true },
			{ text: "Australia", correct: false },
			{ text: "Arctic", correct: false },
			{ text: "Africa", correct: false },
		],
	},
	{
		question: "Which is the smallest continent in the world?",
		answer: [
			{ text: "Asia", correct: false },
			{ text: "Australia", correct: true },
			{ text: "Arctic", correct: false },
			{ text: "Africa", correct: false },
		],
	},
	{
		question: "Which is the largest ocean in the world?",
		answer: [
			{ text: "Pacific Ocean", correct: true },
			{ text: "Atlantic Ocean", correct: false },
			{ text: "Indian Ocean", correct: false },
			{ text: "Southern Ocean", correct: false },
		],
	},
	{
		question: "Which is the biggest city in the world?",
		answer: [
			{ text: "Sao Paolo", correct: false },
			{ text: "Shanghai", correct: false },
			{ text: "Tokyo", correct: true },
			{ text: "Dhaka", correct: false },
		],
	},
	{
		question: "Who is the best cricketer in the world?",
		answer: [
			{ text: "Joe Root", correct: false },
			{ text: "Steve Smith", correct: false },
			{ text: "Williumson", correct: false },
			{ text: "Kohli", correct: true },
		],
	},
	{
		question: "Who is the best footballer in the world?",
		answer: [
			{ text: "Messi", correct: true },
			{ text: "Ronaldo", correct: false },
			{ text: "Mbappe", correct: false },
			{ text: "Neymer", correct: false },
		],
	},
];

const questionElement = document.querySelector(".question");
const answerButton = document.querySelector(".answer_btn");
const next_button = document.querySelector(".next_btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
	currentQuestionIndex = 0;
	score = 0;
	next_button.innerHTML = "Next";
	next_button.style.visibility = "hidden";
	showQuestion();
};

const showQuestion = () => {
	resetState();
	const currentQuestion = questions[currentQuestionIndex];
	const questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

	currentQuestion.answer.forEach((answer) => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButton.appendChild(button);
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", selectQuestion);
	});
};
const resetState = () => {
	while (answerButton.firstChild) {
		answerButton.removeChild(answerButton.firstChild);
	}
};

const selectQuestion = (e) => {
	const selectbtn = e.target;
	const isCorrect = selectbtn.dataset.correct === "true";
	if (isCorrect) {
		selectbtn.classList.add("correct");
		score++;
	} else {
		selectbtn.classList.add("inCorrect");
	}
	Array.from(answerButton.children).forEach((button) => {
		if (button.dataset.correct === "true") {
			button.classList.add("correct");
		} else {
			button.classList.add("inCorrect");
		}
		button.disabled = true;
	});
	next_button.style.visibility = "visible";
};

const showScore = () => {
	resetState();
	questionElement.innerHTML = `You have scored ${score} out of ${questions.length}`;
	next_button.innerHTML = "Play Again";
	next_button.style.visibility = "visible";
};
const handleNextButton = () => {
	currentQuestionIndex++;
	if (currentQuestionIndex < questions.length) {
		showQuestion();
	} else {
		showScore();
	}
};
next_button.addEventListener("click", () => {
	if (currentQuestionIndex < questions.length) {
		handleNextButton();
	} else {
		startQuiz();
	}
});
startQuiz();
