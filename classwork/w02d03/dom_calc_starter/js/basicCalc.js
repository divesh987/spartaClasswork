// Set initial state variables
//find numbers
var numbers = document.getElementsByClassName("number");

//find operators
var operators=document.getElementsByClassName("operator");

//find equals 
var eq=document.getElementsByClassName("eq")[0];

//find clear
var clear = document.getElementsByClassName("clear")[0];

//find display
var display = document.getElementsByClassName("display")[0];

//variable for first number in calculation 
var first_number =5;

//variable for second number in calculation 
var second_number =5;
//variable for operator clicked 
var operator="+";
//variable for answer of calculations
var answer=null;
//---------------------------------------------------
//Setup event listeners
function setupEventListeners(){
	//numbers event listeners 
	for(var i=0;i<numbers.length;i++){
		numbers[i].addEventListener("click",updateAndDisplayNumber);
	}

	//operators event listeners
	for(var i=0;i<operators.length;i++){
		operators[i].addEventListener("click",updateAndDisplayOperator);
	}
	//equals event listener
	eq.addEventListener("click",function(){
		calculation(first_number,operator,second_number);
	});

	//clear event listener 
	clear.addEventListener("click",clearCalc);


}



//Functions for calculator

//add

//subtract

//multiply

//divide


//--------------------------------------------------

//calculation
function calculation(firstNumber,operator,secondNumber) {
	console.log(firstNumber, operator,secondNumber);

}




//--------------------------------------------------

//clear the calculator
function clearCalc(){
	console.log("clearcal ")

}


//display and store the buttons clicked
function updateAndDisplayNumber(){
	console.log("number ", this.value)

}


//display and store the operator 

function updateAndDisplayOperator(){
	console.log("operator", this.value)

}


setupEventListeners();



