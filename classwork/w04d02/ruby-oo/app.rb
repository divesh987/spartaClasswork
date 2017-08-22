require_relative 'person.rb'

divesh = Person.new("Divesh", "Male", 21, 70, 1.7)


# divesh.name = "Divesh Mavji"
# divesh.sex = "Male"
# divesh.age = 21
# divesh.height = 1.7
# divesh.weight =70



# puts divesh.calculate_bmi
# puts divesh.calculate_calories
# # Person one
# person_one_name = "Bob";
# person_one_sex = "Male";
# person_one_age = 50;
# person_one_height = 1.86;
# person_one_weight = 85;

# # calculate BMI
# person_one_bmi = calculate_bmi person_one_height, person_one_weight

# # calculate required calories
# person_one_calories = calculate_calories(person_one_sex, person_one_height, person_one_weight, person_one_age)


# puts "#{person_one_name} has a BMI of #{person_one_bmi}. Recommend calorie intake is #{person_one_calories} calories"
puts divesh.describe
