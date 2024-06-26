const display = document.querySelector(".display");
const rowFour = document.querySelector(".row-four");
const pointNode = document.querySelector("#point");

let workingA = ''
let workingB = ''
let lastOperand = ''
let equalUsed = false
let point = true

display.setAttribute("style", "font-family: BlinkMacSystemFont")

display.textContent = '0'

document.addEventListener('keydown', (event) => {
	keyInputParser(event) 
  });

document.addEventListener('click', function(e){
  if(e.target.tagName=="BUTTON"){respond(e.target.innerHTML)}
})

function keyInputParser (event) {    
  let input = event.key

  if ((/[0-9/+%*=-]/g).test(input) || input == 'Enter') {
  	respond(input)
  } else if (input == '.' && !(/[.]/g).test(workingA)) {
  	respond(input)
  } else if (input == 'Backspace') {
  	respond('Del')
  } 
};

function respond(btn) {	
	const strBtn = String(btn)
	if (checkIfNumber(strBtn)) {
		setValue(strBtn)
	} else if (strBtn == 'Del') {
		backspace()
	} else if (strBtn == '+/-') {
		negate()
	} else if (strBtn == '=' || strBtn == 'Enter') {
		equals()
	} else if (strBtn == 'AC'){
		reset()
	} else if (strBtn == '%') {
		convertToPercent()
	}	else {
		operatorLogic(strBtn);
		equalUsed = false;
	}
	modifyPoint()
}

function checkIfNumber(str){
	return (/[0-9.]/g).test(str)
}

function setValue(btn) {
	if (workingA.length > 10) {return}
	if (workingA == '0' && btn == '0') {return} //prevents leading zeroes
	if (equalUsed) {reset()} //Resets if number typed without modifier

	if (workingA == '0') {
		workingA = ''
		workingA += btn
	} else {workingA += btn}

	display.textContent = workingA;
}

function operatorLogic(currentOperand){
	if (workingB == '') {
		workingB = workingA
	}	else if (equalUsed) {
		checkIfProdOrQuot()
		operate(lastOperand)
	} else {operate(lastOperand)
	}
	workingA = ''
	lastOperand = currentOperand;
}

function checkIfProdOrQuot() {
	if ((lastOperand == '*') || (lastOperand == '/')) {
		workingA = '1'
	} else {
		workingA = '0'
	}
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
	return b == 0 ? display.textContent = "Can't divide by 0" : (a / b)
}

function equals() {
	if (workingA == '' && workingB == '') {return}

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

function checkIfZero() {
	workingA == ''
}

function roundTo(num, tenth) {
	return parseFloat(num.toFixed(tenth))
}

function modifyPoint() {
	if ((/[.]/g).test(workingA) && point) {
		rowFour.removeChild(pointNode);
		point = false;
	} else if (workingA == '') {
		rowFour.appendChild(pointNode)
		point = true
	} else if (equalUsed) {
		rowFour.appendChild(pointNode)
		point = true
	}
}

function backspace() {
	if (equalUsed) {
		return reset()
	}	else if ((/[-]/g).test(workingA) && workingA.length < 3) {
		checkIfProdOrQuot()
	} else if (workingA.length <= 1) {
		checkIfProdOrQuot()
	} else {
		workingA = workingA.slice(0, -1)
	}
	display.textContent = workingA;
}

function negate() {
	equalUsed ? toggleNegativeB() : toggleNegativeA()
}

function toggleNegativeA() {
	if (workingA == '') {return}

	if ((/[-]/g).test(workingA)) {
		workingA = String(workingA).match(/[0-9.]/g).join('')
	} else {workingA = "".concat("-",workingA)}
	display.textContent = workingA	
}

function toggleNegativeB() {
	if (workingB == '') {return}

	if ((/[-]/g).test(workingB)) {
		workingB = String(workingB).match(/[0-9.]/g).join('')
	} else {workingB = "".concat("-",workingB)}
	display.textContent = workingB
}

function convertToPercent() {
	if (workingA == '') {return}

	if (equalUsed) {
		workingB = divide(Number(workingB), 100)
		display.textContent = workingB
	} else {
		workingA = divide(Number(workingA), 100)
		display.textContent = workingA
	}
}



