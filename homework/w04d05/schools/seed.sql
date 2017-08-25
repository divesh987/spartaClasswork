DROP TABLE IF EXISTS student 

CREATE TABLE student{
	student_id SERIAL PRIMARY KEY,
	first_name VARCHAR(20),
	last_name VARCHAR(30),
	age INT(3),
	gender VARCHAR(6),
	email VARCHAR(50),
	num INT(11)

};

INSERT INTO student (student_id, first_name, last_name, age, gender, email, num) 
VALUES (0, "Bruce", "Wayne", 15, "Male", "iamnotbatman@hotmail.com",07802378923);