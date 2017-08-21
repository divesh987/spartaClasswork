# loop  do
# 	puts "Ollie"
# end
	
i=0
while i < 10 do 
	puts "while: #{i}"
	i+=1
end

j=0

begin 
	puts "Do while: #{j}"
	j+=1
end while j<10

k = 0 
until k > 10 do
	puts "Until: #{k}"
	k+=1
end

for i in 0..5
	puts "For Loops are awesome: #{i}"
end
puts ""
for i in 0...5
	puts "For Loops are awesome: #{i}"
end

4.times do
	puts "4 times"
end 

(0..5).each do |i|
	puts "Each: #{i}"
	end 


names = ["Divesh", "Naren", "Kane", "Joe", "Melinda", "Sabirin", "Melson", "William", "Ollie", "Richard"]




(names).each do |name|
	puts name
end 

some_words = ["labyrinth","dyslexia","superman"]

new_words = some_words.map do |word|
	word.reverse
  end

puts new_words


some_numbers = [1,23,35,5,7,5,5,7,5,76,674,3,256,5,632,31,4354,13,465,12]
sum = some_numbers.reduce do |total, number|
	total + number
end
puts sum