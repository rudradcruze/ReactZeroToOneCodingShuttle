// 1. bild a Calculator Application (without the UI using Arithmetic operators

number1 = 10;
number2 = 5;
operation = "add";

switch (operation) {
	case "add":
		console.log(number1 + number2);
		break;

	case "sub":
		console.log(number1 - number2);
		break;

	case "mul":
		console.log(number1 * number2);
		break;

	case "div":
		console.log(number1 / number2);
		break;

	default:
		console.log("Invalid Operation");
		break;
}

// 2. bild an Average Marks Generator. using Arithmetic operators

const marks = [80, 77, 88, 95, 68];
let total = 0;

for (let i = 0; i < marks.length; i++) {
	total += marks[i];
}

const average = total / marks.length;
console.log(average);

// 3. Build a BMI calculator using Arithmetic operators

const weight = 70;
const height = 1.75;

const bmi = weight / (height * height);

console.log(bmi.toFixed(2));

// 4. Build a program to grade students based on marks using switch-case

const studentMarks = 85;

switch (true) {
	case studentMarks >= 80:
		console.log("A+");
		break;

	case studentMarks >= 70:
		console.log("A");
		break;

	case studentMarks >= 60:
		console.log("A-");
		break;

	case studentMarks >= 50:
		console.log("B");
		break;

	case studentMarks >= 40:
		console.log("C");
		break;

	case studentMarks >= 34:
		console.log("D");
		break;

	default:
		console.log("F");
		break;
}
