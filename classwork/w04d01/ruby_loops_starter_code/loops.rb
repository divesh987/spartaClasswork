# return an array of reversed words
def reverse_array_of_strings words
	words.each do |word|
		word.reverse!
	end

end

# return all the even numbers less than the given number
def even_numbers_less_than num

a =	[]
# for i in 0..num do 
# 		if i % 2 == 0 then
# 			return a.insert(i)
# 		end 
# 	end 
# 	return a;

for i in 0...num do 
	if i.even?
		a.push(i)
	end
	end 
	return a
end	



# return the average of all numbers in an array
def average numbers
	b=[]
		sum = numbers.reduce [] do |total, number| 
		total+number
		end 
		b.push(sum/numbers.length)
		return b

end

