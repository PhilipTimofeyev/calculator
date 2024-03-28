const container = document.querySelector(".container");
const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");

let workingA = ''
let workingB = ''
let lastOperand = ''
let equalUsed = false

document.addEventListener('click', function(e){
  if(e.target.tagName=="BUTTON"){respond(e.target.innerHTML)}
  	// console.log(`A: ${workingA}`)
  	// console.log(`B: ${workingB}`)
  	// console.log(`Oper: ${lastOperand}`)
	})


function respond(btn) {	
	const strBtn = String(btn)

	if (btn.match(/[0-9]/g)) {
			workingA += btn;
			display.textContent = workingA;
	} else if (strBtn == '=') {
			equals(lastOperand);
			equalUsed = true
			display.textContent = workingB
	} else if (strBtn == 'AC'){
			reset()
	} else {operatorLogic(strBtn); equalUsed = false}

}

function operatorLogic(currentOperand){
	if (workingB == '') {
		workingB = Number(workingA)
	} else if (lastOperand == currentOperand){
		equals(currentOperand)
	} else if (equalUsed == true) {
		workingA = ''
		equals(lastOperand)
	} else {equals(lastOperand)}
	workingA = ''
	lastOperand = currentOperand;
}

function equals(operand) {
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

function add(a, b) {
	return (a + b)
}

function subtract(a, b) {
	return (a - b)
}

function multiply(a, b) {
	return (a * b)
}

function divide(a, b) {
	if (b == 0) {
		return display.textContent = 'NO DIVIDING BY ZERO';
	}
	return (a / b)
}

function reset(){
	workingA = '';
	workingB = '';
	lastOperand = '';
	display.textContent = '0'
}


