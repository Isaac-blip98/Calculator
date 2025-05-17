//calculator functionality using OOP

const value = document.getElementById('value');
const result = document.getElementById('result');

class Calculator {
    constructor(valueElement, resultElement) {
        this.valueElement = valueElement;
        this.resultElement = resultElement;
        // this.exceptionWindow = exceptionWindow;
        this.clear();
    }

    appendNumber(num) {
        this.valueElement.innerHTML += num;
    }

    appendDot() {
        const current = this.valueElement.innerHTML;

        if (current.length === 0) {
            this.valueElement.innerHTML = '0';
        } else if (!current.endsWith('.')) {
            this.valueElement.innerHTML += '.';
        }
    }

    appendOperator(op) {
        this.removeTrailingOperator();
        const current = this.valueElement.innerHTML;
        if (!current || this.isOperator(current.slice(-1))) {
            this.valueElement.innerHTML += '0' + op;
        } else {
            this.valueElement.innerHTML += op;
        }
    }

    calculate() {
        const current = this.valueElement.innerHTML;
        if (this.isOperator(current.slice(-1))) {
            //this.exceptionWindow.style.display = 'flex';
        } else if (eval(current) === Infinity) {
            this.resultElement.innerHTML = 'Can\'t  divide by zero';
        } else {
            this.resultElement.innerHTML = eval(current);
        }
    }

    clear() {
        this.valueElement.innerHTML = '';
        this.resultElement.innerHTML = 0;
    }

    backspace() {
        let str = this.valueElement.innerHTML;
        this.valueElement.innerHTML = str.slice(0, -1);
    }

    removeTrailingOperator() {
        let str = this.valueElement.innerHTML;
        if (this.isOperator(str.slice(-1))) {
            this.valueElement.innerHTML = str.slice(0, -1);
        }
    }

    isOperator(char) {
        return ['+' , '-', '*' , '/'].includes(char);
    }

    // closeException() {
    //     this.exceptionWindow.style.display = 'none';
    // }
}

const calc = new Calculator(value, result);

btnZero.onclick = () => calc.appendNumber('0');
btnOne.onclick = () => calc.appendNumber('1');
btnTwo.onclick = () => calc.appendNumber('2');
btnThree.onclick = () => calc.appendNumber('3');
btnFour.onclick = () => calc.appendNumber('4');
btnFive.onclick = () => calc.appendNumber('5');
btnSix.onclick = () => calc.appendNumber('6');
btnSeven.onclick = () => calc.appendNumber('7');
btnEight.onclick = () => calc.appendNumber('8');
btnNine.onclick = () => calc.appendNumber('9');

btnPlus.onclick = () => calc.appendOperator('+');
btnMinus.onclick = () => calc.appendOperator('-');
btnMultiply.onclick = () => calc.appendOperator('*');
btnDivide.onclick = () => calc.appendOperator('/');

btnDot.onclick = () => calc.appendDot();
btnClean.onclick = () => calc.clear();
btnEqual.onclick = () => calc.calculate();
btnBackspace.onclick = () => calc.backspace();

//closeExceptionWindow.onclick = () => calc.closeException();