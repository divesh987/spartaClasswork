//creating and printing an array of people
var people = ["Melinda", "Sabirin", "Greg", "Dyno", "Kane", "William", "Melson", "Naren", "Joe"];
for (var i=0;i<people.length;i++){
	console.log(people[i]);
}

console.log("\n");

//using a while loop to find my name and printing its location index
var currentPerson=0;;
while (people[currentPerson]!= "Dyno"){
	console.log(people[currentPerson] + " index: "+ currentPerson);
	currentPerson++;
}
console.log("Dyno is found at index: " + currentPerson);

console.log("\n");

//creating an object and printing the keys and values
var thingsInClassroom = {
	macbooks: 10,
	cups: 8,
	tissuebox: 1,
	bottles: 5,
	glasses: 3,
	bin: 1,
	mouse: 1,
	whiteboards: 7,
	pens:5,
};
for (var i in thingsInClassroom){
	console.log(i + ": " + thingsInClassroom[i]);
}