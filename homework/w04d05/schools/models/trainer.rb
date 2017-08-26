class Trainer
	attr_accessor :trainer_id, :first_name, :last_name, :gender, :course

	def self.open_connection 
		PG.connect(dbname: "school")
	end

	def self.hydrate data
		trainer = Trainer.new 
		trainer.trainer_id = data["trainer_id"]
		trainer.first_name = data["first_name"]
		trainer.last_name = data["last_name"]
		trainer.gender = data["gender"]
		trainer.course = data["course"]

		trainer
	end 

	def self.all 
		conn = self.open_connection
		sql = "SELECT * FROM trainer ORDER BY trainer_id"
		results = conn.exec(sql)

		trainers = results.map do |result|
			self.hydrate result
		end 

		trainers
	end 

	def self.find id 
		conn = self.open_connection
		sql = "SELECT * FROM trainer WHERE trainer_id = #{id} LIMIT 1"
		trainers = conn.exec(sql)

		trainer = self.hydrate trainers[0]

		trainer
	end

	def save 
		conn = Trainer.open_connection

		if (!self.trainer_id)
			sql = "INSERT INTO trainer (first_name, last_name, gender, course) VALUES ('#{self.first_name}', '#{self.last_name}', '#{self.gender}', '#{self.course}')"
		else
		sql = "UPDATE trainer SET first_name='#{self.first_name}', last_name='#{self.last_name}', gender='#{self.gender}', course='#{self.course}' WHERE trainer_id= '#{self.trainer_id}'"
		end
		conn.exec(sql)
	end

	def self.destroy id 
		conn = self.open_connection
		sql = "DELETE FROM trainer WHERE trainer_id = #{id}"
		conn.exec(sql)
	end 
end