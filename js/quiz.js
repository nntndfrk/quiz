class Quiz {
    constructor(title, quiestions) {
        this.title = title;
        this.score = 0;
        this.currentQuestionIndex = 0;

        this.questions = questions.map(question => new Question(question.text, question.answers, question.correctAnswer));
    }

    get currentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    get hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }

    checkAnswer(answer) {
        if (this.currentQuestion.isCorrectAnswer(answer)) {
            this.score++;
        }

        this.currentQuestionIndex++;
    }
}