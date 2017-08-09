$(function(event){
//setting up initial variables 

//winning possibilities variable
var winningPossibilites =[[012],[345],[678],[147],[048],[258],[036],[246]];

//player variable 
var player1=[];

//player2 variable
var player2=[];


//display player choice

function displayPlayerChoice(){

	// var table= 
}
var boxes = $("td");
    $(boxes).each(function(index,box){
        onClick(box);
})
function onClick(box1){
        //console.log($(box).attr("data-num"));
         $(box1).on('click', function(){
             console.log($(box1).attr("data-num"))
             var $b=$(box1).attr("data-num")
             $b.html("X");



         })

    }



//display player2 choice


//calculation function 


	





})

//