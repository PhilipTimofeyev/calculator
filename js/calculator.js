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

let working = ''

document.addEventListener('click', function(e){
  if(e.target.tagName=="BUTTON"){
   working += e.target.innerHTML;
   display.textContent = working;
  	// console.log(e.target.innerHTML)
  }
})


function respond(btn) {	
	
}