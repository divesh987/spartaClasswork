class Student 
	attr_accessor :student_id, :first_name, :last_name, :age, :gender, :email, :num

	def self.open_connection 
		PG.connect(dbname: "school")
	end

	def self.hydrate data
		student = Student.new 
		student.student_id = data["student_id"]
		student.first_name = data["first_name"]
		student.last_name = data["last_name"]
		student.age = data["age"]
		student.gender = data["gender"]
		student.email = data["email"]
		student.num = data["num"]

		student
	end 
end