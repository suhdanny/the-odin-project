class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number == '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand == '') return; // if current operand is empty, exit
        if (this.previousOperand != '') {
            this.compute(); // if current operand and previous operand is both not empty, compute the value
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        let prev = parseFloat(this.previousOperand);
        let current = parseFloat(this.currentOperand);

        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }

        this.currentOperand = computation;
        this.previousOperand = '';
        this.operation = undefined;
    }
    
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = '';
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]'); 
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandTextElement = document.querySelector('.previous-operand');
const currentOperandTextElement = document.querySelector('.current-operand');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})