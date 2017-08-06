alert("---Welcome Rock Paper Scissors---");

var playerName= prompt("Enter your name to begin: ");
var choice = prompt("Choose a game mode: \n a: Basic \n b: Best of 5 \n c: Rock Paper Scissors Spock ");

switch(choice) {
	case "a":
	var cRandom = Math.random();
    var cChoice;
	if(cRandom >=0 && cRandom<= 0.33){
		cChoice = "Rock";
	} else if(cRandom >0.33 && cRandom<=0.66){
		cChoice= "Scissors";
	} else if (cRandom > 0.66 && cRandom<=1){
		cChoice= "Paper";
	}

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
		alert("The rules: \n - The first player to win 3 times wins (best out of 5)");

		var cCount=0;
		var pCount=0;
		do {
				var cRandom = Math.random();
				var cChoice;
				if(cRandom >=0 && cRandom<= 0.33){
					cChoice = "Rock";
				} else if(cRandom > 0.33 && cRandom<=0.66){
					cChoice= "Scissors";
				} else if (cRandom > 0.66 && cRandom<=1){
					cChoice= "Paper";
				}

				var pChoice = prompt("Choose Between Rock, Paper and Scissors: ");
				switch(pChoice){
					case "Rock":
						if (cChoice=="Rock"){
							alert("Computer Chose " + cChoice + ", Rock is the same as " + pChoice + "\n Tie Game!" );
							alert("Scores \n " + playerName + ": " + pCount + "\n Computer: " + cCount);
						}else if (cChoice == "Paper"){
							alert("Computer Chose " + cChoice + ", Paper beats " + pChoice + "\n Computer wins!" );
							cCount++;
							alert("Scores \n " + playerName + ": " + pCount + "\n Computer: " + cCount);
						} else if (cChoice=="Scissors"){
							alert("Computer Chose " + cChoice + ", Rock beats " + cChoice + "\n" + playerName + " wins" );
							pCount++;
							alert("Scores \n " + playerName + ": " + pCount + "\n Computer: " + cCount);
						}
					break;
					case "Paper":
						if (cChoice=="Rock"){
							alert("Computer Chose " + cChoice + ", Paper beats " + cChoice + "\n" + playerName + " wins");
							pCount++;
							alert("Scores \n " + playerName + ": " + pCount + "\n Computer: " + cCount);
						}else if (cChoice == "Paper"){
							alert("Computer Chose " + cChoice + ", Paper is the same as " + pChoice + "\n Tie Game!" );
							alert("Scores \n " + playerName + ": " + pCount + "\n Computer: " + cCount);
						} else if (cChoice=="Scissors"){
							alert("Computer Chose " + cChoice + ", Scissors beats " + pChoice + "\n" + "Computer wins!" );
							cCount++;
							alert("Scores \n " + playerName + ": " + pCount + "\n Computer: " + cCount);
						}
					break;
					case "Scissors":
						if (cChoice=="Rock"){
							alert("Computer Chose " + cChoice + ", Rock beats " + pChoice + "\n" + "Computer wins");
							cCount++;
							alert("Scores \n " + playerName + ": " + pCount + "\n Computer: " + cCount);
						}else if (cChoice == "Paper"){
							alert("Computer Chose " + cChoice + ", Scissors beats " + cChoice + "\n"  + playerName + " wins!");
							pCount++
							alert("Scores \n " + playerName + ": " + pCount + "\n Computer: " + cCount);
						} else if (cChoice=="Scissors"){
							alert("Computer Chose " + cChoice + ", Scissors is the same as " + pChoice + "\n" + "Tie Game!" );
							alert("Scores \n " + playerName + ": " + pCount + "\n Computer: " + cCount);
						}
					break;
					default:
						alert("Not a valid option");

				}
		} while (pCount<=2 && cCount<=2);
		if (cCount==3){
			alert("Computer wins");
		} else if (pCount==3){
			alert(playerName + " wins!")
		}
break;
	case "c":
		var cRandom = Math.random();
		var cChoice;
		if(cRandom >=0 && cRandom<= 0.2){
			cChoice = "Rock";
		} else if(cRandom > 0.2 && cRandom<=0.4){
			cChoice= "Scissors";
		} else if (cRandom > 0.4 && cRandom<=0.6){
			cChoice= "Paper";
		} else if (cRandom > 0.6 && cRandom<=0.8){
			cChoice="Lizard";
		} else if (cRandom >0.8 && cRandom<=1){
			cChoice="Spock";
		}
		var pChoice = prompt("Choose Between Rock, Paper, Scissors, Lizard, Spock: ");
		switch(pChoice){
			case "Rock":
				if (cChoice=="Rock"){
					alert("Computer Chose " + cChoice + ", Rock is the same as " + pChoice + "\n Tie Game!" );
				}else if (cChoice == "Paper"){
					alert("Computer Chose " + cChoice + ", Paper beats " + pChoice + "\n Computer wins!" );
				} else if (cChoice=="Scissors"){
					alert("Computer Chose " + cChoice + ", Rock beats " + cChoice + "\n" + playerName + " wins!" );
				} else if (cChoice=="Lizard"){
					alert("Computer Chose " + cChoice + ", Rock beats " + cChoice + "\n" + playerName + " wins!" );
				}
				else if (cChoice=="Spock"){
					alert("Computer Chose " + cChoice + ", Spock beats " + pChoice + "\n Computer wins!" );
				}
			break;
			case "Paper":
				if (cChoice=="Rock"){
					alert("Computer Chose " + cChoice + ", Paper beats " + cChoice + "\n" + playerName + " wins!");
				}else if (cChoice == "Paper"){
					alert("Computer Chose " + cChoice + ", Paper is the same as " + pChoice + "\n Tie Game!" );
				} else if (cChoice=="Scissors"){
					alert("Computer Chose " + cChoice + ", Scissors beats " + pChoice + "\n" + "Computer wins!" );
				} else if (cChoice=="Lizard"){
					alert("Computer Chose " + cChoice + ", Lizard beats " + pChoice + "\n Computer wins! " );
				}
				else if (cChoice=="Spock"){
					alert("Computer Chose " + cChoice + ", Paper beats " + cChoice + "\n" + playerName + " wins!" );
				}
			break;
			case "Scissors":
			if (cChoice=="Rock"){
				alert("Computer Chose " + cChoice + ", Rock beats " + pChoice + "\n" + "Computer wins");
			}else if (cChoice == "Paper"){
				alert("Computer Chose " + cChoice + ", Scissors beats " + cChoice + "\n"  + playerName + " wins!");
			} else if (cChoice=="Scissors"){
				alert("Computer Chose " + cChoice + ", Scissors is the same as " + pChoice + "\n" + "Tie Game!" );
			} else if (cChoice=="Lizard"){
				alert("Computer Chose " + cChoice + ", Scissors beats " + cChoice + "\n" + playerName + " wins" );
			}
			else if (cChoice=="Spock"){
				alert("Computer Chose " + cChoice + ", Spock beats " + pChoice + "\n Computer wins!" );
			}
		break;
		case "Lizard":
		if (cChoice=="Rock"){
				alert("Computer Chose " + cChoice + ", Rock beats " + pChoice + "\n"  + "Computer wins!");
			}else if (cChoice == "Paper"){
				alert("Computer Chose " + cChoice + ", Lizard beats " + cChoice + "\n"  + playerName + " wins!");
			} else if (cChoice=="Scissors"){
				alert("Computer Chose " + cChoice + ", Scissors beats " + pChoice + "\n"  + "Computer wins!");
			} else if (cChoice=="Lizard"){
				alert("Computer Chose " + cChoice + ", Lizard is the same as " + cChoice + "\n Tie Game! " );
			}
			else if (cChoice=="Spock"){
				alert("Computer Chose " + cChoice + ", Lizard beats " + cChoice + "\n" + playerName +" wins!" );
			}
		break;
		case "Spock":
		if (cChoice=="Rock"){
				alert("Computer Chose " + cChoice + ", Spock beats " + cChoice + "\n"  + playerName + " wins!");
			}else if (cChoice == "Paper"){
				alert("Computer Chose " + cChoice + ", Paper beats " + pChoice + "\n Computer wins!");
			} else if (cChoice=="Scissors"){
				alert("Computer Chose " + cChoice + ", Spock beats " + cChoice + "\n"  + playerName + " wins!");
			} else if (cChoice=="Lizard"){
				alert("Computer Chose " + cChoice + ", Lizard beats " + pChoice + "\n Computer wins! ");
			}else if (cChoice=="Spock"){
				alert("Computer Chose " + cChoice + ", Spock is the same as " + pChoice + "\n" + "Tie Game!" );
		break;
		default:
			alert("Not a valid option");

	}
	break;

	default: 
	alert("Not a valid choice")
}
