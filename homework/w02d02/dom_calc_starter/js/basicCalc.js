
document.addEventListener('DOMContentLoaded',function(){
	
var display = document.getElementsByClassName("display")[0];
console.log(display);
var number1;
var number2;
var result;
var operation;

	var numbers= document.getElementsByClassName("number");
//clear button assignment;
var clear = getInputsByValue("c")[0];
console.log(clear);
clear.addEventListener("click",function(){
	display.value=null;
})

//assigning number buttons
 var num= getInputsByValue("1")[0];
console.log(num.value);
num.addEventListener("click",function(){
	display.value+=num.value;
})

var num2= getInputsByValue("2")[0];
console.log(num2.value);
num2.addEventListener("click",function(){
	display.value+=num2.value;
})

var num3= getInputsByValue("3")[0];
console.log(num3.value);
num3.addEventListener("click",function(){
	display.value+=num3.value;
})

var num4= getInputsByValue("4")[0];
console.log(num4.value);
num4.addEventListener("click",function(){
	display.value+=num4.value;
})

var num5= getInputsByValue("5")[0];
console.log(num5.value);
num5.addEventListener("click",function(){
	display.value+=num5.value;
})

var num6= getInputsByValue("6")[0];
console.log(num6.value);
num6.addEventListener("click",function(){
	display.value+=num6.value;
})

var num7= getInputsByValue("7")[0];
console.log(num7.value);
num7.addEventListener("click",function(){
	display.value+=num7.value;
})

var num8= getInputsByValue("8")[0];
console.log(num8.value);
num8.addEventListener("click",function(){
	display.value+=num8.value;
})

var num9= getInputsByValue("9")[0];
console.log(num9.value);
num9.addEventListener("click",function(){
	display.value+=num9.value;
})
var num0= getInputsByValue("0")[0];
console.log(num0.value);
num0.addEventListener("click",function(){
	display.value+=num0.value;
})


//operation buttons being assigned 
var op1 = getInputsByValue("+")[0];
console.log(op1.value);
op1.addEventListener("click",function(){
	operation="+";
	number1=parseInt(display.value);
	console.log(number1);
	display.value=null;
})
var op2 = getInputsByValue("-")[0];
console.log(op2.value);
op2.addEventListener("click",function(){
	operation="-"
	number1=parseInt(display.value);
	console.log(number1);
	display.value=null;
})
var op3 = getInputsByValue("/")[0];
console.log(op3.value);
op1.addEventListener("click",function(){
	operation="/"
	number1=parseInt(display.value);
	console.log(number1);
	display.value=null;
})
var op4 = getInputsByValue("x")[0];
console.log(op4.value);
op4.addEventListener("click",function(){
	operation="x";
	number1=parseInt(display.value);
	console.log(number1);
	display.value=null;
})
//equals button assignment
var equals = getInputsByValue("=")[0];
console.log(equals.value);
equals.addEventListener("click",function(){
	number2=parseInt(display.value);
	console.log(number2);
	switch(operation){
		case "+":
		result=parseInt(number1)+parseInt(number2);
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
	display.value=result;
})

//function to allow getting inputsbyvalue
function getInputsByValue(value)
{
    var allInputs = document.getElementsByTagName("input");
    var results = [];
    for(var x=0;x<allInputs.length;x++)
        if(allInputs[x].value == value)
            results.push(allInputs[x]);
    return results;
}
	})
