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
		if (workingB == '') {
			workingB = Number(workingA)
			workingA = ''
			display.textContent = workingA;
		} else {
			workingB += Number(workingA)
			display.textContent = workingB;
			workingA = ''
		}
	}
}
// console.log("Hello1".match(/[0-9]/g))