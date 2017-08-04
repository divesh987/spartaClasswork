alert("---Welcome Rock Paper Scissors---");
var cRandom = Math.random();
var cChoice;
	if(cRandom >=0 && cRandom<= 0.33){
		cChoice = "Rock";
	} else if(cRandom >=0.34 && cRandom<=0.66){
		cChoice= "Scissors";
	} else if (cRandom >= 0.67 && cRandom<=1){
		cChoice= "Paper";
	}

var playerName= prompt("Enter your name to begin: ");
var choice = prompt("Choose a game mode: \n a: Basic \n b: Best of 5 \n c: Rock Paper Scissors Spock ");

switch(choice) {
	case "a":

	var pChoice = prompt("Choose Between Rock, Paper and Scissors: ");
	switch(pChoice){
		case "Rock":
			if (cChoice=="Rock"){
				alert("Computer Chose " + cChoice + ", Rock is the same as " + pChoice + "\n Tie Game!" );
			}else if (cChoice == "Paper"){
				alert("Computer Chose " + cChoice + ", Paper beats " + pChoice + "\n Computer wins!" );
			} else if (cChoice=="Scissors"){
				alert("Computer Chose " + cChoice + ", Rock beats " + cChoice + "\n" + playerName + " wins" );
			}
		break;
		case "Paper":
			if (cChoice=="Rock"){
				alert("Computer Chose " + cChoice + ", Paper beats " + cChoice + "\n" + playerName + " wins");
			}else if (cChoice == "Paper"){
				alert("Computer Chose " + cChoice + ", Paper is the same as " + pChoice + "\n Tie Game!" );
			} else if (cChoice=="Scissors"){
				alert("Computer Chose " + cChoice + ", Scissors beats " + pChoice + "\n" + "Computer wins!" );
			}
		break;
		case "Scissors":
		if (cChoice=="Rock"){
				alert("Computer Chose " + cChoice + ", Rock beats " + pChoice + "\n" + "Computer wins");
			}else if (cChoice == "Paper"){
				alert("Computer Chose " + cChoice + ", Scissors beats " + cChoice + "\n"  + playerName + " wins!");
			} else if (cChoice=="Scissors"){
				alert("Computer Chose " + cChoice + ", Scissors is the same as " + pChoice + "\n" + "Tie Game!" );
			}
		break;
		default:
			alert("Not a valid option");

	}

	break;
	case "b":

	break;
	case "c":

	break;

	default: 
	alert("Not a valid choice")
}
