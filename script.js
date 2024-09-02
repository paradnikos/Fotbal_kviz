const questions = [
    {
      question: "Který český fotbalista získal v roce 2003 Zlatý míč?",
      answers: [
          { text: "Tomáš Rosický", correct: false },
          { text: "Karel Poborský", correct: false },
          { text: "Pavel Nedvěd", correct: true },
          { text: "Milan Baroš", correct: false }
      ]
    },
    {
      question: "Který tým vyhrál první ročník samostatné české fotbalové ligy v roce 1993?",
      answers: [
          { text: "SK Slavia Praha", correct: false },
          { text: "AC Sparta Praha", correct: true },
          { text: "FC Baník Ostrava", correct: false },
          { text: "FK Viktoria Žižkov", correct: false }
      ]
    },
    {
      question: "Který český klub jako první postoupil do skupinové fáze Ligy mistrů?",
      answers: [
        { text: "AC Sparta Praha", correct: true },
        { text: "SK Slavia Praha", correct: false },
        { text: "FC Slovan Liberec", correct: false },
        { text: "FC Viktoria Plzeň", correct: false }
      ]
    },
    {
      question: "Který klub má přezdívku 'Ševci'?",
      answers: [
        { text: "FC Fastav Zlín", correct: true },
        { text: "1. FC Slovácko", correct: false },
        { text: "FK Teplice", correct: false },
        { text: "SK Sigma Olomouc", correct: false }
      ]
    },
    {
      question: "Který český fotbalista přestoupil do Borussie Dortmund v roce 2001?",
      answers: [
        { text: "Tomáš Rosický", correct: true },
        { text: "Pavel Nedvěd", correct: false },
        { text: "Jan Koller", correct: false },
        { text: "Patrik Berger", correct: false }
      ]
    },
    {
      question: "Který klub získal svůj první titul v české lize v sezóně 2010/2011?",
      answers: [
        { text: "FC Viktoria Plzeň", correct: true },
        { text: "SK Slavia Praha", correct: false },
        { text: "AC Sparta Praha", correct: false },
        { text: "FC Baník Ostrava", correct: false }
      ]
    },
    {
      question: "Který český fotbalista hrál za Chelsea FC v letech 2001–2005?",
      answers: [
        { text: "Petr Čech", correct: false },
        { text: "Milan Baroš", correct: false },
        { text: "Jiří Jarošík", correct: true },
        { text: "Marek Jankulovski", correct: false }
      ]
    },
    {
      question: "Který český klub má přezdívku 'Klokani'?",
      answers: [
        { text: "Bohemians 1905", correct: true },
        { text: "FK Jablonec", correct: false },
        { text: "MFK Karviná", correct: false },
        { text: "1. FK Příbram", correct: false }
      ]
    },
    {
      question: "Který hráč je známý jako 'Kanonýr z Letné'?",
      answers: [
        { text: "Jan Koller", correct: false },
        { text: "Václav Kadlec", correct: false },
        { text: "David Lafata", correct: true },
        { text: "Milan Baroš", correct: false }
      ]
    },
    {
      question: "Který klub se stal vítězem českého poháru v sezóně 2018/2019?",
      answers: [
          { text: "AC Sparta Praha", correct: false },
          { text: "FC Baník Ostrava", correct: false },
          { text: "SK Slavia Praha", correct: true },
        { text: "FC Viktoria Plzeň", correct: false }
      ]
    },
    {
      question: "Který český fotbalista získal cenu pro nejlepšího střelce české ligy pětkrát za sebou?",
      answers: [
          { text: "Jan Koller", correct: false },
          { text: "David Lafata", correct: true },
          { text: "Milan Baroš", correct: false },
          { text: "Tomáš Řepka", correct: false }
      ]
    },
    {
      question: "Který klub hraje svá domácí utkání na stadionu 'Střelnice'?",
      answers: [
        { text: "FK Jablonec", correct: true },
        { text: "FC Slovan Liberec", correct: false },
        { text: "FC Viktoria Plzeň", correct: false },
        { text: "1. FC Slovácko", correct: false }
      ]
    },
    {
      question: "Který český fotbalista získal cenu Fotbalista roku v roce 2020?",
      answers: [
          { text: "Vladimír Darida", correct: false },
          { text: "Patrik Schick", correct: false },
          { text: "Jiří Pavlenka", correct: false },
          { text: "Tomáš Souček", correct: true }
      ]
    }
  ];
  
class Quiz {
    constructor(questions) {
        
        this.questionElement = document.querySelector(".question");
        this.resultElement = document.querySelector(".result");
        this.answerButtons = document.querySelector(".answers-buttons");
        this.nextButton = document.querySelector(".next-btn");
        this.restButton = document.querySelector(".rest-btn");
        this.scoreIcons = document.querySelectorAll(".ball img.white");

        this.originalQuestions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;

        this.nextButton.addEventListener("click", () => this.handleNextButton());

        this.startQuiz();
    }

    startQuiz() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.nextButton.innerHTML = "Další";
        this.nextButton.style.display = "none";
        this.restButton.style.display = "none";
        this.resultElement.style.display = "none";  
        this.questionElement.style.display = "block"
        this.questions = this.getRandomQuestions();
        this.resetScoreIcons(); 
        this.showQuestion();
    }

    getRandomQuestions() {
        const shuffledQuestions = this.originalQuestions.sort(() => 0.5 - Math.random());
        return shuffledQuestions.slice(0, 5);
    }

    showQuestion() {
        this.resetState();
        const currentQuestion = this.questions[this.currentQuestionIndex];
        const questionNo = this.currentQuestionIndex + 1;
        this.questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

        currentQuestion.answers.forEach((answer) => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            this.answerButtons.appendChild(button);

            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }

            button.addEventListener("click", (e) => this.selectAnswer(e));
        });
    }

    resetState() {
        this.nextButton.style.display = "none";
        while (this.answerButtons.firstChild) {
            this.answerButtons.removeChild(this.answerButtons.firstChild);
        }
    }

    selectAnswer(e) {
        const selectBtn = e.target;
        const isCorrect = selectBtn.dataset.correct === "true";

        if (isCorrect) {
            selectBtn.classList.add("correct");
            this.updateScoreIcon(true); 
            this.score++;
        } else {
            selectBtn.classList.add("incorrect");
            this.updateScoreIcon(false); 
        }

        Array.from(this.answerButtons.children).forEach((button) => {
            button.disabled = true;
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
        });

        this.nextButton.style.display = "block";
    }

    updateScoreIcon(isCorrect) {
        const currentBall = this.scoreIcons[this.currentQuestionIndex];
        if (isCorrect) {
            currentBall.src = "img/green.png";
        } else {
            currentBall.src = "img/red.png";
        }
    }

    resetScoreIcons() {
        this.scoreIcons.forEach(icon => {
            icon.src = "img/icons8-football-64.png"; 
        });
    }

    showScore() {
        this.resetState();
        const resultMessage = this.score > (this.questions.length - this.score) 
        ? "Gratuluji <br> Výhra" 
        : "Ajajaj <br> Prohra";
        this.resultElement.innerHTML = `${resultMessage} <br> ${this.score} : ${this.questions.length - this.score}`;
        this.questionElement.style.display = "none"
        this.resultElement.style.display = "block";  
        this.restButton.innerHTML = "Hrát znova";
        this.restButton.style.display = "block";
        this.restButton.addEventListener("click", () => this.startQuiz());
    }

    handleNextButton() {
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < this.questions.length) {
            this.showQuestion();
        } else {
            this.showScore();
        }
    }
}

const quiz = new Quiz(questions);
