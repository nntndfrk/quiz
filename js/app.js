class App {
    constructor({ element, quiz }) {
        this.quiz = quiz;
        this.mainContainer = element;
        this.marks = ['Неудача.', 'Хм...', 'Удовлетворительно.', 'Неплохо.', 'Хорошо!', 'Отлично!!!'];

        this.init();
    }

    init() {
        this.quizContainer = document.querySelector('#quiz');
        this.title = document.querySelector('#title');
        this.score = document.querySelector('#score');
        this.question = document.querySelector('#question');
        this.answerList = document.querySelector('#answers');
        this.progressBar = document.querySelector('#progress');

        this.answerList.addEventListener('click', this.handleAnswerButtonClick.bind(this));
    }

    _removeChildren(elem) {
        while (elem.lastChild) {
            elem.removeChild(elem.lastChild);
        }
    }

    handleAnswerButtonClick({ target }) {
        this.quiz.checkAnswer(target.innerText);
        if (this.quiz.step < this.quiz.totalQuiestions) {
            this.displayNext();
        } else {
            this.displayScore();
        }
    }

    displayNext() {
        this.title.innerHTML = this.quiz.title;
        this.displayQuestion();
        this.displayAnswers();
        this.displayProgress();
    }

    displayQuestion() {
        this.question.innerHTML = this.quiz.currentQuestion.text;
    }

    displayAnswers() {
        let answers = this.quiz.currentQuestion.answers;
        this._removeChildren(this.answerList);
        for (let i = 0; i <  answers.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = answers[i];
            li.classList.add('list-group-item', 'list-group-item-action');
            this.answerList.appendChild(li);
        }
    }


    displayProgress() {
        this.progressBar.textContent = `Вопрос ${this.quiz.step+1} из ${this.quiz.totalQuiestions}`;
    }

    displayScore() {
        this.title.style.display = "none";
        this.question.style.display = "none";
        this.answerList.style.display = "none";
        this.progressBar.style.display = "none";
        this.score.innerHTML = `${this.marks[this.quiz.correctAnswers]} Правильных ответов: ${this.quiz.correctAnswers}`;

    }
}