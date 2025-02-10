const x = "Rudra";
console.log(x);

const obj = {
	name: "Rudra",
	age: 20,
};

console.log(obj);

z = 0;

// const y = String(z);
const y = Boolean(z);

console.log(y);
console.log(typeof y);

console.log(2 ** 5);

// Switch case
const day = "friday";

switch (day) {
	case "monday":
		console.log("Today is Monday");
		break;

	case "tuesday":
		console.log("Today is Tuesday");
		break;

	case "wednesday":
		console.log("Today is Wednesday");
		break;

	case "thursday":
		console.log("Today is Thursday");
		break;

	case "friday":
		console.log("Today is Friday");
		break;

	case "saturday":
		console.log("Today is Saturday");
		break;

	case "sunday":
		console.log("Today is Sunday");
		break;

	default:
		console.log("Invalid Day");
		break;
}

if (80) {
	console.log("80 is true");
} else {
	console.log("80 is false");
}
