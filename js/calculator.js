const container = document.querySelector(".container");
const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".row-one");

let workingA = ''
let workingB = ''
let lastOperand = ''

document.addEventListener('click', function(e){
  if(e.target.tagName=="BUTTON"){
   console.log(respond(e.target.innerHTML))
  }
})


function respond(btn) {	
	const strBtn = String(btn)

	if (btn.match(/[0-9]/g)) {
		workingA += btn;
		display.textContent = workingA;
	} else if (strBtn == '=') {
		equals(lastOperand);
		display.textContent = workingB
	} else {operatorLogic(strBtn)}
}

function operatorLogic(currentOperand){
	if (workingB == '') {
		workingB = Number(workingA)
	} else if (lastOperand == currentOperand){
		equals(currentOperand)
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
	workingA = ''
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
	return (a / b)
}



// console.log("Hello1".match(/[0-9]/g))