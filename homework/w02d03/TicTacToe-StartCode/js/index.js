$(function(event){
//setting up initial variables 

//winning possibilities variable
var winningPossibilites =[[0,1,2],[3,4,5],[6,7,8],[1,4,7],[0,4,8],[2,5,8],[0,3,6],[2,4,6]];
var fake = [0,1,2];
var win=false;
var clear = $("#reset");
//player variable 
var player1="X";

//player2 variable
var player2="O";
var counter =0;
var clickCounter=0;
//display player choice
var xValues=[];
var oValues=[];
var display = $(".playerTurn");
var boxes = $("td");

function displayPlayerChoice(){

	// var table= 
}
assignBoxButtons();
function assignBoxButtons(){
    $(boxes).each(function(index,box){
    	onClick(box);

}) 
}
function onClick(box1){
         $(box1).one('click', function(){
         	if (counter%2==0){
         	$(box1).html(player1);
         	$(box1).addClass(player1);
         	$(display.html("It is O's turn"));
         	counter++;
         	clickCounter++;
         	console.log(clickCounter);
         	// arrayA(parseInt($(box1).attr("data-num")));
         	 xValues.push(parseInt($(box1).attr("data-num")));
         	  compareAll(xValues,player1);
         } else {
         	$(box1).html(player2);
         	$(box1).addClass(player2);
         	$(display.html("It is X's turn"));
         	counter++;
         	clickCounter++;
         	console.log(clickCounter);
         	// arrayA(parseInt($(box1).attr("data-num")));
         	 oValues.push(parseInt($(box1).attr("data-num")))
         	 compareAll(oValues,player2);

              // console.log($(box1).attr("data-num"))
         }
          console.log("X Values:+",xValues);
          console.log("O Values:+",oValues);
         })
    }
function compareAll(x,player){
	for(var i=0;i<winningPossibilites.length;i++){
		gameLogic(x,i,player)
	}
}
function gameLogic(x,y,winner){
win=winningPossibilites[y].every(function(element, index) {
    return 	x.includes(element);    
});
if(win==true){
	$(display.html(winner +" wins"));
		 		for (var i=boxes.length-1;i>=0;i--){
	 			var $box=$(boxes[i]);
	 			$box.off("click");
	 		}
	
}
}
//clear button 
$(clear.on("click",function(){
    location.reload();
	// boxes.html(null);
	// boxes.removeClass(player1);
	// boxes.removeClass(player2);
	// xValues=[];
	// oValues=[];
	// $(display.html("It is X's turn"));
	// counter=0;

	// assignBoxButtons();
}))


function tieResult(){
	if (clickCounter==9 && (display.html() =="X wins" || display.html() =="O wins") ){
		display.html("Tie Game");

	}
	
}
tieResult();



})

//