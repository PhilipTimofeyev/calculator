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
	if (btn.match(/[0-9]/g)) {
		workingA += btn;
		display.textContent = workingA;
	} else if (String(btn) == '+') {
		lastOperand = '+';
		if (workingB == '') {
			workingB = Number(workingA)
			workingA = ''
		} else {
			workingB += Number(workingA)
			display.textContent = workingB;
			workingA = ''
		}
	} else if (String(btn) == '=') {
		display.textContent = equals(lastOperand);
		// equals(lastOperand)
	}
}

function equals(operand) {
	let result
	switch (operand) {
	case '+':
		result = Number(workingA) + Number(workingB)
	}
	return result
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

function add(a, b) {
	return (a / b)
}



// console.log("Hello1".match(/[0-9]/g))