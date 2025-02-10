// for (let i = 0; i < 5; i++) {
// 	console.log(i, i * 2);
// }

// let i = 0;
// while (true) {
// 	console.log(i);
// 	i++;
// 	if (i > 5) {
// 		break;
// 	}
// }

// let j = 0;
// do {
// 	console.log("hello this is do while i am running");
// 	console.log(j);
// 	j++;
// } while (j < 0);

// // Break and Continue
// for (let i = 0; i < 10; i++) {
// 	if (i === 5) {
// 		break;
// 	}
// 	console.log("use break ->", i);
// }

// for (let i = 0; i < 10; i++) {
// 	if (i === 5) {
// 		continue;
// 	}
// 	console.log("use continue ->", i);
// }

const person = {
	firstName: "Francis",
	age: 22,
	city: "Dhaka",
	country: "Bangladesh",
	isActive: true,
};

for (let key in person) {
	console.log(key, person[key]);
}

const a = [1, 2, 3, 4, 5];

for (let val of a) {
	console.log(val);
}

const b = "Hello, World!";

for (let val of b) {
	console.log(val);
}
