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
		sql = "SELECT * FROM student ORDER BY student_id"
		results = conn.exec(sql)

		students = results.map do |result|
			self.hydrate result
		end 

		students
	end 

	def self.find id 
		conn = self.open_connection
		sql = "SELECT * FROM student WHERE student_id = #{id} LIMIT 1"
		students = conn.exec(sql)

		student = self.hydrate students[0]

		student
	end

	def save 
		conn = Student.open_connection

		if (!self.student_id)
			sql = "INSERT INTO student (first_name, last_name, age, gender, email, num) 
	VALUES (#{self.first_name}, #{self.last_name}, #{self.age}, #{self.gender}, #{self.email},#{self.num});"
		else
		sql = "UPDATE student SET first_name=#{self.first_name}, last_name=#{self.last_name}, age=#{self.age}, gender=#{self.gender}, email=#{self.email}, num=#{self.num} WHERE student_id=#{self.student_id}"
		end
		conn.exec(sql)
	end

	def self.destroy id 
		conn = self.open_connection
		sql = "DELETE FROM student WHERE student_id = #{id}"
		conn.exec(sql)
	end 
end