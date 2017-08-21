puts "Welcome to the text Adventure Game created by Divesh, Enter your name to begin: "
name = gets.chomp

puts "Welcome #{name} , Congratulations on your promotion to a rank B ninja, I, 
	Master Slasher will now test your survival
	skills, Here is a compass and some food, off you go !"

puts "In the forest, there are four paths:  N, W, E, S. Choose a path to begin: "
choice = gets.chomp.upcase;

if choice == "N" then 
choice_north

elsif choice == "W" then 
	"You fall into a deep pit and cannot seem to find a way to get up, You wished you noticed it earlier
	but now it is too late. After several agonising days you die of starvation. GAME OVER!!"

elsif choice == "S" then 

elsif choice == "E" then 

else
	puts "invalid input"
end 


def choice_north 
		puts "You are now in front of another ninja, He is a rank C ninja and needs your help to 
	escape from the quicksand he is stuck in, Do you want to help? Y or N"
	help_or_not = gets.chomp.upcase
	if help_or_not.eql? "Y" then  
		puts " You decided to help the ninja, You successfully saved the ninja, 
		He tells you his name is Ritsu and becomes your companion for survival"
		puts "You will lead Ritsu as well now, Where do you choose to go ? N, W, E, S"
		choice2= gets.chomp.upcase

	elsif help_or_not.eql? "N" then 
		puts "You chose not to save the ninja, The ninja curses you as he drowns,
		You hear the echoes of his curse after his demise and continue..."
	else 
		puts "Not a valid input"
	end 

end 

		

	


