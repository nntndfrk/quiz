class Quiz {
    constructor(title, questions) {
        this.title = title;
        this._questions = questions.map(question => new Question(question));
        this._counter = 0;
        this._correctAnswersCounter = 0;
    }
    
    get questions() {
        return Object.freeze(this._questions);
    }

    get step() {
        return this._counter;
    }

    set step(val) {
        this._counter = val;
    }

    get correctAnswers() {
        return this._correctAnswersCounter;
    }

    set correctAnswers(val) {
        this._correctAnswersCounter = val;
    }

    get currentQuestion() {
        return (this.step < this.questions.length) ? this.questions[this.step] : {};
    }
    
    get hasEnded() {
        return (this.step < this.questions.length) ? false : true;
    }
    
    checkAnswer(answer) {
        if (this.currentQuestion.isCorrectAnswer(answer)) this.correctAnswers++;
        this.step++;
    }
}