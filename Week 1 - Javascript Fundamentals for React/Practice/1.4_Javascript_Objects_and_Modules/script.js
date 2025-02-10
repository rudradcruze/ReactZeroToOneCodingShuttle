// import { greetings as greet, PI_VALUE } from "./greet.js";
// import addFn from "./greet.js"; // default import
import greet from "./greet_default.js";

const person = {
	age: 26,
	firstName: "Francis",
	lastName: "Rudra",
	address: {
		city: "Dhaka",
		country: "Bangladesh",
	},
	isActive: true,
	books: ["Javascript", "React", "Node"],
	walk: function () {
		console.log("Person is walking", this.firstName);
	},
};

console.log(person);
console.log(person.firstName);

person.firstName = "Francis Rudra";

console.log(person.firstName);
console.log(person["address"]);
console.log(person["address"].city);

person.walk();

// greet();
// console.log(PI_VALUE);

// console.log(addFn(5, 10));

console.log(greet.add(5, 10));
console.log(greet.PI);
