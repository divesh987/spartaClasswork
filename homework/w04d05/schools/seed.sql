DROP TABLE IF EXISTS student;

CREATE TABLE student(
	student_id SERIAL PRIMARY KEY,
	first_name VARCHAR(20),
	last_name VARCHAR(30),
	age VARCHAR(3),
	gender VARCHAR(6),
	email TEXT, 
	num VARCHAR(11)
);

INSERT INTO student (first_name, last_name, age, gender, email, num) 
VALUES ('Bruce', 'Wayne', '15', 'Male', 'iamnotbatman@hotmail.com','07802378923');