// const sum = (a, b, ...c) => {
// 	let result = a;
// 	result += b;

// 	for (let i = 0; i < c.length; i++) result += c[i];

// 	return result;
// };

// console.log(sum(5, 10, 10, 10, 10));

// const person = {
// 	firstName: "Francis",
// 	age: 22,
// };

// const address = {
// 	city: "Dhaka",
// 	country: "Bangladesh",
// };

// // person.address = address;
// const newPerson = {
// 	...person,
// 	...address,
// };

// console.log(person);

// console.log(newPerson);

// const firstArray = [1, 2, 3, 4, 5];
// const secondArray = [6, 7, 8, 9, 10];

// const combinedArray = [...firstArray, ...secondArray];
// console.log(combinedArray);

// const person = {
// 	firstName: "Francis",
// 	age: 22,
// 	city: "Dhaka",
// 	country: "Bangladesh",
// 	isActive: true,
// };

// const {
// 	firstName: personFirstName,
// 	age,
// 	city: addressCity,
// 	...allOthers
// } = person;

// // console.log(person);

// console.log(personFirstName, age, addressCity);

// console.log(allOthers);

// const x = [1, 2, 3, 4, 5];

// const [a, b, ...rest] = x;

// console.log(a, b);
// console.log(rest);

const name = "Rudra";
const age = 22;

const sentance = "my name is " + name + " and\nI am " + age + " years old";

console.log(sentance);

const sentance2 = `My name is ${name} and
I am ${age} years old`;

console.log(sentance2);
