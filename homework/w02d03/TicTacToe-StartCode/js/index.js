$(function(event){
//setting up initial variables 

//winning possibilities variable
var winningPossibilites =[[0,1,2],[3,4,5],[6,7,8],[1,4,7],[0,4,8],[2,5,8],[0,3,6],[2,4,6]];
var fake = [0,1,2];
// console.log(winningPossibilites[0])
// console.log(fake);
// console.log(winningPossibilites[0]==fake);
var xWin;
var yWin;

//player variable 
var player1="X";

//player2 variable
var player2="O";

var counter =0;
//display player choice
var a=[];
var values=[];
var values2=[];
var display = $(".playerTurn");

function displayPlayerChoice(){

	// var table= 
}
var boxes = $("td");
//boxes.html("X");

    $(boxes).each(function(index,box){
        onClick(box);
})
function onClick(box1){
         $(box1).one('click', function(){
         	if (counter%2==0){
         	$(box1).html(player1);
         	$(box1).addClass(player1);
         	$(display.html("It is O's turn"));
         	counter++;
         	// arrayA(parseInt($(box1).attr("data-num")));
         	 values.push(parseInt($(box1).attr("data-num")));
         	  compareAll(values,player1);


         } else {
         	$(box1).html(player2);
         	$(box1).addClass(player2);
         	$(display.html("It is X's turn"));
         	counter++;
         	// arrayA(parseInt($(box1).attr("data-num")));
         	 values2.push(parseInt($(box1).attr("data-num")))
         	 compareAll(values2,player2);

              console.log($(box1).attr("data-num"))
         }
        
          console.log("X values:+",values);
          console.log("O values:+",values2);

         })
         function arrayA(values){
         	a.push(x);
         }


    }

//display player2 choice

//calculation function 
function compareAll(x,player){
	for(var i=0;i<winningPossibilites.length;i++){
		gameLogic(x,i,player)
	}
}

function gameLogic(x,y,winner){
xWin=winningPossibilites[y].every(function(element, index) {
    return 	x.includes(element);    
});
if(xWin==true){
	$(display.html(winner +" wins"));
}
}
// oWin=winningPossibilites[0].every(function(element, index) {
//     return 	y.includes(element);    
// });
// if(oWin==true){
// 	console.log("O wins");
// }




})

//