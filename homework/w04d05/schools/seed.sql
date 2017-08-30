DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS trainer;

CREATE TABLE student(
	student_id SERIAL PRIMARY KEY,
	first_name VARCHAR(20),
	last_name VARCHAR(30),
	age VARCHAR(3),
	gender VARCHAR(6),
	email TEXT, 
	num VARCHAR(11)
);
CREATE TABLE trainer(
	trainer_id SERIAL PRIMARY KEY,
	first_name VARCHAR(20),
	last_name VARCHAR(30),
	gender VARCHAR(6),
	course VARCHAR(12)
);

INSERT INTO student (first_name, last_name, age, gender, email, num) 
VALUES ('Bruce', 'Wayne', '15', 'Male', 'iamnotbatman@hotmail.com','07802378923');
INSERT INTO student (first_name, last_name, age, gender, email, num) 
VALUES ('Clark', 'Kent', '17', 'Male', 'kryptonium@gmail.com','07648920483');
INSERT INTO student (first_name, last_name, age, gender, email, num) 
VALUES ('Scarlett', 'Johannson', '19', 'Female', 'blackwidow@hotmail.com','07249463728');
INSERT INTO student (first_name, last_name, age, gender, email, num) 
VALUES ('Selena', 'Gomez', '24', 'Female', 'thewizard@hotmail.com','07802348393');
INSERT INTO student (first_name, last_name, age, gender, email, num) 
VALUES ('Harry', 'Potter', '20', 'Male', 'ibeatthedarklord@hotmail.com','07936574832');

INSERT INTO trainer (first_name, last_name, gender, course) 
VALUES ('Tomas', 'Paul', 'Male', 'Maths');

