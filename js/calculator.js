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
		operate(currentOperand)

	} else if (equalUsed == true) {
		workingA = ''
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

	workingB = String(result)
	display.textContent = workingB;
}

function add(a, b) {return (a + b)}

function subtract(a, b) {return (a - b)}

function multiply(a, b) {return (a * b)}

function divide(a, b) {
	// return (a / b)
	return b == 0 ? display.textContent = 'NO DIVIDING BY ZERO' : (a / b)
}

function equals() {
	if (workingB == '') {return}
	operate(lastOperand);
	equalUsed = true;
	display.textContent = workingB;
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


