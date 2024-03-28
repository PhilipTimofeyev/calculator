const container = document.querySelector(".container");
const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");

let workingA = ''
let workingB = ''
let lastOperand = ''
let equalUsed = false

display.textContent = '0'

document.addEventListener('click', function(e){
  if(e.target.tagName=="BUTTON"){respond(e.target.innerHTML)}
  	console.log(`A: ${workingA}`)
  	console.log(`B: ${workingB}`)
  	console.log(`Oper: ${lastOperand}`)
  	console.log(`equals: ${equalUsed}`)
	})


function respond(btn) {	
	const strBtn = String(btn)

	if (checkIfNumber(strBtn)) {
		workingA += btn;
		display.textContent = workingA;

	} else if (strBtn == '=') {
		equals()

	} else if (strBtn == 'AC'){
		reset()

	} else {
		operatorLogic(strBtn);
		equalUsed = false;
	}
}

function operatorLogic(currentOperand){
	if (workingB == '') {
		workingB = workingA

	} else if (lastOperand == currentOperand){
		checkIfProdOrQuot()
		operate(currentOperand)

	} else if (equalUsed == true) {
		checkIfProdOrQuot()
		operate(lastOperand)

	} else {operate(lastOperand)
	}
	workingA = ''
	lastOperand = currentOperand;
}

function operate(operand) {
	let a = Number(workingA)
	let b = Number(workingB)
	let result

	switch (operand) {
	case '+':
		result = add(a, b);
		break;
	case '-':
		result = subtract(b, a)
		break;
	case '*':
		result = multiply(a, b)
		break;
	case '/':
		result = divide(b, a)
		break;
	}

	workingB = roundTo(result, 10)
	display.textContent = workingB;
}

function add(a, b) {return (a + b)}

function subtract(a, b) {return (a - b)}

function multiply(a, b) {return (a * b)}

function divide(a, b) {
	return b == 0 ? display.textContent = 'NO DIVIDING BY ZERO' : (a / b)
}

function equals() {
	if (workingB == '') {return}

	operate(lastOperand);
	equalUsed = true;
}

function reset() {
	workingA = '';
	workingB = '';
	lastOperand = '';
	display.textContent = '0'
	equalUsed = false
}

function checkIfNumber(str){
	return str.match(/[0-9]/g)
}

function checkIfProdOrQuot() {
	if ((lastOperand == '*') || (lastOperand == '/')) {
		workingA = '1'
	} else {
		workingA = ''
	}
}

function roundTo(num, tenth) {
	return parseFloat(num.toFixed(tenth))
}


