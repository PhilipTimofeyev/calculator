const container = document.querySelector(".container");
const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".row-one");

// numbers.forEach(function(elem) {
// 	console.log(elem);
//     elem.addEventListener("input", function() {
//         alert("YAY")
//     });
// });

let workingA = ''
let workingB = ''
let lastOperand = ''

document.addEventListener('click', function(e){
  if(e.target.tagName=="BUTTON"){
   console.log(respond(e.target.innerHTML))
   // display.textContent = workingA;
  }
})


function respond(btn) {	
	const strBtn = String(btn)
	
	if (btn.match(/[0-9]/g)) {
		workingA += btn;
		display.textContent = workingA;
	} else if (strBtn == '+') {
		operatorLogic('+')
	} else if (strBtn == '-') {
		operatorLogic('-')
	}	else if (strBtn == '=') {
		equals(lastOperand);
		display.textContent = workingB
	}
}

function operatorLogic(currentOperand){
	if (workingB == '') {
		workingB = Number(workingA)
	} else if (lastOperand == currentOperand){
		equals(currentOperand)
		display.textContent = workingB;
	} 
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
	}
	workingB = String(result)
	workingA = ''
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