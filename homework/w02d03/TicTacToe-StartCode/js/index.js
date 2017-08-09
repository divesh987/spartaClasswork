$(function(event){
//setting up initial variables 

//winning possibilities variable
var winningPossibilites =[[012],[345],[678],[147],[048],[258],[036],[246]];

//player variable 
var player1="X";

//player2 variable
var player2="O";

var counter =0;
//display player choice

function displayPlayerChoice(){

	// var table= 
}
var boxes = $("td");
//boxes.html("X");

    $(boxes).each(function(index,box){
        onClick(box);
})
function onClick(box1){
         $(box1).on('click', function(){
         	if (counter%2==0){
         	$(box1).html(player1);
         	$(box1).addClass(player1);
         	counter++;
         	 console.log($(box1).attr("data-num"))
         } else {
         	$(box1).html(player2);
         	$(box1).addClass(player2);
         	counter++;

              console.log($(box1).attr("data-num"))
         }

         })

    }



//display player2 choice


//calculation function 


	





})

//