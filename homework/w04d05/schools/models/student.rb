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

	def self.all 
		conn = self.open_connection
		sql = "SELECT student_id, first_name, last_name, age, gender, email, num FROM student ORDER BY student_id"
		results = conn.exec(sql)

		students = results.map do |result|
			self.hydrate result
		end 

		students
	end 

	def self.find id
		conn = self.open_connection
		sql = "SELECT student_id, first_name, last_name, age, gender, email, num FROM student WHERE student_id= #{self.student_id} LIMIT 1"
		students = conn.exec(sql)

		student = self.hydrate students[0]

		student 

	end 
end