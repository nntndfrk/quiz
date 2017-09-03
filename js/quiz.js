class Quiz {
    constructor(title, quiestions) {
        this.title = title;
        this._quiestions = quiestions;
        this._counter = 0;
        this._correctAnswersCounter = 0;
    }

    get step() {
        return this._counter;
    }

    get totalQuiestions() {
        return this._quiestions.length;
    }

    get correctAnswers() {
        return this._correctAnswersCounter;
    }

    get currentQuestion() {
        if (this._counter < this._quiestions.length) {
            return this._quiestions[this.step];
        }
        
    }
    
    get hasEnded() {
        return (this._counter < this._quiestions.length) ? false : true;
    }
    
    checkAnswer(answer) {
        let correctAnswer = this._quiestions[this.step]['answers'][this._quiestions[this._counter]['correctAnswer']]
        this._counter++;
        if ( answer === correctAnswer ) this._correctAnswersCounter++;
    }
}