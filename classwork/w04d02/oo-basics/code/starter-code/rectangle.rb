class Rectangle 

	attr_accessor :height, :width

	def initialize(height, width)
		self.height = height
		self.width = width
	end 

	def calculate_area 
		self.height* self.width
	end 

	def calculate_perimeter 
		(self.height * 2) + (self.width * 2)
	end 

	def describe
		puts "Area of Rectangle: #{calculate_area}, Perimeter of Rectangle: #{calculate_perimeter}"
	end 

end 