
// document.addEventListener('DOMContentLoaded',function(){
	
// var display = document.getElementsByClassName("display")[0];
// console.log(display);
// var number1;
// var number2;
// var result;
// var operation;

// 	var numbers= document.getElementsByClassName("number");
// //clear button assignment;
// var clear = getInputsByValue("c")[0];
// console.log(clear);
// clear.addEventListener("click",function(){
// 	display.value=null;
// })

// //assigning number buttons
//  var num= getInputsByValue("1")[0];
// console.log(num.value);
// num.addEventListener("click",function(){
// 	display.value+=num.value;
// })

// var num2= getInputsByValue("2")[0];
// console.log(num2.value);
// num2.addEventListener("click",function(){
// 	display.value+=num2.value;
// })

// var num3= getInputsByValue("3")[0];
// console.log(num3.value);
// num3.addEventListener("click",function(){
// 	display.value+=num3.value;
// })

// var num4= getInputsByValue("4")[0];
// console.log(num4.value);
// num4.addEventListener("click",function(){
// 	display.value+=num4.value;
// })

// var num5= getInputsByValue("5")[0];
// console.log(num5.value);
// num5.addEventListener("click",function(){
// 	display.value+=num5.value;
// })

// var num6= getInputsByValue("6")[0];
// console.log(num6.value);
// num6.addEventListener("click",function(){
// 	display.value+=num6.value;
// })

// var num7= getInputsByValue("7")[0];
// console.log(num7.value);
// num7.addEventListener("click",function(){
// 	display.value+=num7.value;
// })

// var num8= getInputsByValue("8")[0];
// console.log(num8.value);
// num8.addEventListener("click",function(){
// 	display.value+=num8.value;
// })

// var num9= getInputsByValue("9")[0];
// console.log(num9.value);
// num9.addEventListener("click",function(){
// 	display.value+=num9.value;
// })
// var num0= getInputsByValue("0")[0];
// console.log(num0.value);
// num0.addEventListener("click",function(){
// 	display.value+=num0.value;
// })
// //operation buttons being assigned 
// var op1 = getInputsByValue("+")[0];
// console.log(op1.value);
// op1.addEventListener("click",function(){
// 	operation="+";
// 	number1=parseInt(display.value);
// 	console.log(number1);
// 	display.value=null;
// })
// var op2 = getInputsByValue("-")[0];
// console.log(op2.value);
// op2.addEventListener("click",function(){
// 	operation="-";
// 	number1=parseInt(display.value);
// 	console.log(number1);
// 	display.value=null;
// })
// var op3 = getInputsByValue("/")[0];
// console.log(op3.value);
// op3.addEventListener("click",function(){
// 	operation="/"
// 	number1=parseInt(display.value);
// 	console.log(number1);
// 	display.value=null;
// })
// var op4 = getInputsByValue("x")[0];
// console.log(op4.value);
// op4.addEventListener("click",function(){
// 	operation="x";
// 	number1=parseInt(display.value);
// 	console.log(number1);
// 	display.value=null;
// })
// //equals button assignment
// var equals = getInputsByValue("=")[0];
// console.log(equals.value);
// equals.addEventListener("click",function(){
// 	number2=parseInt(display.value);
// 	console.log(number2);
// 	switch(operation){
// 		case "+":
// 		result=number1+number2;
// 		break;
// 		case "-":
// 		result=number1-number2;
// 		break;
// 		case "/":
// 		result=number1/number2;
// 		break;
// 		case "x":
// 		result=number1*number2;
// 		break;
// 	}
// 	display.value=result;
// })
// //function to allow getting inputsbyvalue
// function getInputsByValue(value)
// {
//     var allInputs = document.getElementsByTagName("input");
//     var results = [];
//     for(var x=0;x<allInputs.length;x++)
//         if(allInputs[x].value == value)
//             results.push(allInputs[x]);
//     return results;
// }
// 	})


//Attempt 2 -refactoring attempt
document.addEventListener('DOMContentLoaded',function(){
	
var display = document.getElementsByClassName("display")[0];
console.log(display);
var number1;
var number2;
var result;

var equals=document.getElementsByName("eq");
var clear=document.getElementsByName("clear");

var op1=document.getElementsByName("plus");
var op2=document.getElementsByName("minus");
var op3=document.getElementsByName("times");
var op4=document.getElementsByName("div");
var operation=[op1,op2,op3,op4];
var finalop;
var calc;

var num1=document.getElementsByName("one");
var num2=document.getElementsByName("two");
var num3=document.getElementsByName("three");
var num4=document.getElementsByName("four");
var num5=document.getElementsByName("five");
var num6=document.getElementsByName("six");
var num7=document.getElementsByName("seven");
var num8=document.getElementsByName("eight");
var num9=document.getElementsByName("nine");
var num0=document.getElementsByName("zero");

var nums=[num1,num2,num3,num4,num5,num6,num7,num8,num9,num0];

assignAllNumButtons();
assignAllOperationButtons();

clear[0].addEventListener("click", function(){
	display.value=null;
})
function assignAllOperationButtons(){
	for (var i=0;i<operation.length;i++){
		assignOperators(i);
	}
}
function assignAllNumButtons(){
for (var i=0;i<nums.length;i++){
	assignNumButton(i);
}
}
function assignNumButton(x) {
	nums[x][0].addEventListener("click",function(){
		display.value+=nums[x][0].value;
	})
}
console.log(display.value)
function assignOperators(x){
	operation[x][0].addEventListener("click", function(){
		number1=parseInt(display.value);
		display.value=null;
		finalop= operation[x][0].value;
	})
}
equals[0].addEventListener("click",function(){
	number2=parseInt(display.value);
	console.log(finalop)
	calculation();
	display.value=result;
})
function calculation(){
		switch(finalop){
		case "+":
		result=number1+number2;
		break;
		case "-":
		result=number1-number2;
		break;
		case "/":
		result=number1/number2;
		break;
		case "x":
		result=number1*number2;
		break;
	}
}
})