alert("--Welcome to my Rock Paper Scissors Lizard Spock Game--");
var playerName = prompt("Please enter your name to begin: ");
var cChoice;
var pScore=0;
var cScore=0;
function computerChoice() {
	var cRandom= Math.random();
	if (cRandom<=0.2){
		cChoice="rock";
	} else if(cRandom>0.2 && cRandom<=0.4){
		cChoice="paper";
	}else if(cRandom>0.4 && cRandom<=0.6){
		cChoice="scissors";
	} else if(cRandom>0.6 && cRandom <=0.8){
		cChoice="lizard";
	} else {
		cChoice="spock";
	}
}
function gameLogic(){
	var pChoice = prompt("Choose between Rock Paper Scissors Lizard Spock: ");
	pChoice = pChoice.toLowerCase();
	if (pChoice=="rock" && cChoice=="scissors"|| pChoice=="rock" && cChoice=="lizard" || pChoice=="scissors" && cChoice=="lizard" || pChoice=="paper" && cChoice=="rock" || pChoice=="lizard" && cChoice=="paper" || pChoice=="scissors" && cChoice=="paper" || pChoice=="lizard" && cChoice=="spock"|| pChoice=="spock" && cChoice=="rock" || pChoice=="spock" && cChoice=="scissors" || pChoice=="paper" && cChoice=="spock"){
		alert("Computer chose " + cChoice + ", " + pChoice +" beats " + cChoice+ "\n" + playerName + " wins!")
		pScore++;
		alert("Scores:\n Computer: " + cScore + "\n" + playerName + ": " + pScore);
	}
	 else if (cChoice=="rock" && pChoice=="scissors"|| cChoice=="rock" && pChoice=="lizard" || cChoice=="scissors" && pChoice=="lizard" || cChoice=="paper" && pChoice=="rock" || cChoice=="lizard" && pChoice=="paper" || cChoice=="scissors" && pChoice=="paper" || cChoice=="lizard" && pChoice=="spock" || cChoice=="spock" && pChoice=="rock" || cChoice=="spock" && pChoice=="scissors" || cChoice=="paper" && pChoice=="spock"){
		alert("Computer chose " + cChoice + ", " + cChoice +" beats " + pChoice+ "\n Computer wins!");
		cScore++;
		alert("Scores:\n Computer: " + cScore + "\n" + playerName + ": " + pScore);
	}
	 else if (cChoice==pChoice){
		alert("Computer chose "+ cChoice + ", " + pChoice + " is the same as " + cChoice + "\n Tie Game!");
		alert("Scores:\n Computer: " + cScore + "\n" + playerName + ": " + pScore);
	} else {
		alert("Not a valid option");
	}
}
do {
		computerChoice();
		gameLogic();
	} while (cScore <3 && pScore<3);
	if (cScore==3) alert("Computer wins!");
	if (pScore==3) alert(playerName + " wins!");