// write code here

document.addEventListener('DOMContentLoaded', function(){
// 	 var button = document.getElementById("myButton");


// function btnClick(){
// 	console.log("Button was clicked");
// }
//  button.addEventListener('click', btnClick);
//  console.log(button);

 var myForm= document.getElementById("myForm");

 myForm.addEventListener("submit",function(){
 	event.preventDefault();
 	var fnameField = document.getElementById('firstname');
 	console.log(fnameField);
 	if (!fnameField.value){
 		console.log('First Name field is empty');
 	}
 })



// var buttons = document.querySelectorAll(".myButtons");

// for(var i=0;i<buttons.length;i++){

	
// 	buttons[i].addEventListener("click",function(){
// 		console.log(this.value+ " ");
// 	})
// }






})
