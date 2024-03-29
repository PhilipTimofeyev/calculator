const container = document.querySelector(".container");
const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
const rowFour = document.querySelector(".row-four");
const pointNode = document.querySelector("#point");

document.addEventListener('keydown', (event)=> {    
    let input = event.key

    if ((/[0-9/+=*-]/g).test(input) || event.key == 'Backspace') {
    	respond(input)
    } else if (input == '.' && !(/[.]/g).test(workingA)) {
    	respond(input)
    }
});

let workingA = ''
let workingB = ''
let lastOperand = ''
let equalUsed = false
let point = true

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
		setValue(strBtn)

	} else if (strBtn == 'Backspace') {
		backspace()

	} else if (strBtn == '=') {
		equals()

	} else if (strBtn == 'AC'){
		reset()

	} else {
		operatorLogic(strBtn);
		equalUsed = false;
	}
	removePoint()
}

function operatorLogic(currentOperand){
	if (workingB == '') {
		workingB = workingA

	} else if (lastOperand == currentOperand){
		// checkIfProdOrQuot()
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
	point = false
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
	return (/[0-9.]/g).test(str)
}

function checkIfProdOrQuot() {
	if ((lastOperand == '*') || (lastOperand == '/')) {
		workingA = '1'
	} else {
		workingA = ''
	}
}

function setValue(btn) {
	if (equalUsed) {reset()}
	workingA += btn;
	display.textContent = workingA;
}

function roundTo(num, tenth) {
	return parseFloat(num.toFixed(tenth))
}

function removePoint() {
	if ((/[.]/g).test(workingA) && point) {
		rowFour.removeChild(pointNode);
		point = false;
	} else if (workingA == '') {
		rowFour.appendChild(pointNode)
		point = true
	}
}

function backspace() {
	workingA = workingA.slice(0, -1)
	display.textContent = workingA;
}




