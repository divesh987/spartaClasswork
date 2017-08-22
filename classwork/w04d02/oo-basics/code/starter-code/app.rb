require_relative 'square.rb'
require_relative 'rectangle.rb'
# Squares


puts "Enter length of Square: "
x = gets.chomp.to_i
square1 = Square.new(x)
square1.area
puts "Enter the scale you wish to scale the Square by: "
y = gets.chomp.to_i
square1.scale(y)

# Rectangles
puts "Enter height of Rectangle: "
h = gets.chomp.to_i
puts "Enter width of Rectangle: "
w = gets.chomp.to_i
rectangle1 = Rectangle.new(h,w)
rectangle1.describe




