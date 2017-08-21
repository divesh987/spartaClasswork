puts "Welcome to my Ruby Calculator"

def add_numbers num1,num2 
	num1 + num2
end

def subtract_numbers num1,num2 
	num1 - num2
end 

def multiply_numbers num1,num2 
	num1 * num2
end 
	
def divide_numbers num1,num2
	num1 / num2
end 

def power num1,num2 
	num1 **num2
end 

def square num 
	num**0.5
end

def bmi h,w
	(w/(h**2))
	
end

def bmi_result bmi

	if bmi < 16 then 
		"You have Severe thinness"
	elsif bmi > 16 && bmi < 17 then 
		"You have Moderate thinness"
	elsif bmi > 17 && bmi < 18.5 then 
		"You have Mild thinness"
	elsif  bmi > 18.5 && bmi < 25 then 
		"You are normal"
	elsif bmi > 25 && bmi < 30 then 
		"You are Overweight"
	elsif bmi > 30 && bmi < 35 then 
		"You are Obese Class 1"
	elsif bmi > 35 && bmi < 40 then 
		"You are Obese Class 2"
	elsif bmi > 40 then
		"You are Obese Class 3"
	end 
end

def trip_time d,s 
	d/s
end

def trip_cost d,fe,cpg,s

	if s > 60 && s < 270 then 
		decrementer = (s-60)*2
		if fe > decrementer then 
			fe-=decrementer
		end
	end 
	(d/fe) * cpg 

end 


puts "Menu\n A: Basic Calculator\n B: Advanced Calculator\n C: BMI Calculator\n D: Trip Calculator"
choice = gets.chomp.upcase

if choice.eql? "A" then
	puts "Basic Calculator:\n Enter First Number: "
	number1 = gets.chomp.to_f
	puts "Enter operation: \n +, - , *, /:"
	operation = gets.chomp
	puts "Enter Second number: "
	number2 =gets.chomp.to_f

case operation 

when "+"
	result = add_numbers number1, number2  
	puts "The result is #{result}"
when "-"
	result = subtract_numbers number1, number2
	puts "The result is #{result}"
when "*"
	result = multiply_numbers number1, number2
	puts "The result is #{result}"
when "/"
	result = divide_numbers number1, number2
	puts "The result is #{result}"
else 
	puts "Not a valid input! "
end 

elsif choice.eql? "B" then 
	puts "Advanced Calculator: \n PWR: Power \n SQ: Square Root"
	choiceb = gets.chomp.upcase
	case choiceb

	when "PWR"
		puts "Enter First Number: "
		number1 = gets.chomp.to_f
		puts "Enter Exponential: "
		number2 =gets.chomp.to_f
		result = power number1, number2
		puts "The result is #{result}"

	when "SQ"
		puts "Enter number you wish to find the square root of: "
		number1 = gets.chomp.to_f
		result = square number1
		puts "The result is #{result}"

end 

elsif choice.eql? "C" then 
	puts "BMI Calculator:\n Enter your height in Meters: "
	height = gets.chomp.to_f
	puts "Enter your weight in Kgs: "
	weight = gets.chomp.to_f
	bmi_value = bmi height, weight
	bmi_string = bmi_result bmi_value
	result= "Your BMI is #{bmi_value},#{bmi_string}"
	puts result;


elsif choice.eql? "D" then 
	puts "Trip Calculator: \n Enter the distance of the trip in miles:"
	distance = gets.chomp.to_f
	puts "Enter the fuel efficiency of the trip (mpg): "
	fuel_efficiency = gets.chomp.to_f
	puts "Enter the cost per gallon in pounds: "
	cost_per_gallon = gets.chomp.to_f
	puts "Enter the speed (MPH): "
	speed= gets.chomp.to_f

	time = trip_time distance, speed
	cost = trip_cost distance, fuel_efficiency, cost_per_gallon, speed
	result = "Your trip will take #{time.round(2)} hours and cost £#{cost.round(2)}"
	puts result 

end 




	

		