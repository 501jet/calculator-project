class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()// clears the calculator when we refresh
    } //we need to know where to place our display text for the numbers. research constructor functions.
     
    clear() {
        this.currentOperand = ''; // the 'this' keyword is used to refer to an object.
        //whatever we refer to with the keyword will be replaced by whatever we set it to. in this case, it's an empty string.
        this.previousOperand = '';
        this.operation = undefined;
    } //will remove everything from the display.


    delete() {

    } // will delete the last number input from the calculator.

    appendNumber (number) {
        this.currentOperand = number;
    } // will add numbers to the display when the user types them in.

    chooseOperation (operation) {

    } // lets the user choose the operation they want to use. takes the operation.

    compute() {

    } // maybe it's to actually carry out the calculation?

    updateDisplay ()  {
        this.currentOperandTextElement.innerText = this.currentOperand;
    } // updates our output.
} 





const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll ('[data-operation]');
const equalsButton = document.querySelector ('[data-equals]');
const deleteButton = document.querySelector ('[data-delete]');
const allClearButton = document.querySelector ('[data-all-clear]');
const previousOperandTextElement = document.querySelector ('[data-previous-operand]');
const currentOperandTextElement = document.querySelector ('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, 
    currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener ('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
});

