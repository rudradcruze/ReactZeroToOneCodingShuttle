function greet() {
	console.log("Hello, World!");
}

function greet2(first_name) {
	console.log("Hello, " + first_name + "!");
}

function greet3(first_name, last_name) {
	return first_name + " " + last_name;
}

greet();
greet2("Francis Rudra");
const full_name = greet3("Francis", "Rudra");
console.log(full_name);

const multiply = (a, b) => {
	return a * b;
};

const result = multiply(5, 10);
console.log(result);

const greetFunction = function greet5() {
	console.log("Hello, World!");
};

greetFunction();

// annoynmous function
const greetAnno = () => {
	console.log("This is annoynmous function");
};

greetAnno();

// IIFE
(() => {
	console.log("This is IIFE");
})();

(() => console.log("This is IFFE 2"))();

// Default parameter
const greetDefault = (name = "Francis") => {
	console.log("Hello, " + name);
};

greetDefault();
greetDefault("Rudra");

// Create a calculator

const calculator = (a, b, operator) => {
	return operator(a, b);
};

const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply2 = (a, b) => a * b;

const divide = (a, b) => a / b;

const result2 = calculator(10, 5, add);

console.log(result2);

// curring function (return function from another function)

const multiple = (a) => {
	return (b) => a * b;
};

const double = multiple(2);

const ress = double(5);
