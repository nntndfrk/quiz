class App {
    constructor({ element, quiz }) {
        this.element = element;
        this.quiz = quiz;

        this.init();
    }

    init() {
        this.titleElement = this.element.querySelector('#title');
        this.titleElement.innerHTML = this.quiz.title;

        this.quizElement = this.element.querySelector('#quiz');
        this.questionElement = this.element.querySelector('#question');
        this.answersElement = this.element.querySelector('#answers');
        this.scoreElement = this.element.querySelector('#score');
        this.progressElement = this.element.querySelector('#progress');

        this.answersElement.addEventListener('click', this.handleAnswerButtonClick.bind(this));
    }

    handleAnswerButtonClick({ target }) {
        let answer = target.id;

        this.quiz.checkAnswer(answer);
        this.displayNext();
    }

    displayNext() {
        if (this.quiz.hasEnded) {
            this.displayScore();
        } else {
            this.displayQuestion();
            this.displayAnswers();
            this.displayProgress();
        }
    }

    displayQuestion() {
        this.questionElement.innerHTML = this.quiz.currentQuestion.text;
    }

    displayAnswers() {
        let answers = quiz.currentQuestion.answers;
        let html = '';

        for (let i = 0; i < answers.length; i++) {
            html += `<li id="${i}" class="list-group-item list-group-item-action">${answers[i]}</li>`;
        }

        this.answersElement.innerHTML = html;
    }

    displayProgress() {
        let currentQuestionNumber = quiz.currentQuestionIndex + 1;

        this.progressElement.innerHTML = `Вопрос ${currentQuestionNumber} из ${quiz.questions.length}`;
    }

    displayScore() {
        let html = `<header class="card-header">Правильных ответов: ${quiz.score }</header>`;
        this.quizElement.innerHTML = html;
    }
}