const a = [
	"one",
	2,
	"three",
	"four",
	5,
	{ name: "Francis" },
	() => "Hello, World!",
];

// console.log(a);
// console.log(a.length);

// for (let value of a) {
// 	console.log(value);
// }

// a.push("six");

// console.log(a);

// a.pop();

// console.log(a);

// a.forEach((value, index, array) => {
// 	console.log(value, index);
// });

// console.log("Hellooooooooooooooooo");

// a.sort();

// console.log(a);

// console.log(a.includes("one"));
// console.log(a.includes("seven"));

// console.log(a.indexOf("one"));

// b = [1, 2, 3, 4, 5];

// b.splice(0, 2);
// console.log(b);

// b = [1, 2, 3, 4, 5];

// b.splice(2, 0, 6, 7, 8);
// console.log(b);

// const z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const y = z.filter((value) => value % 2 === 0);

// console.log(y);

// const hh = z.map((value) => value * 2);
// console.log(hh);

// const kk = z.filter((value) => value % 2 === 0).map((value) => value * 2);

// console.log(kk);

// const u = [1, 2, 3, 4, 5];
// const uu = u.map((value) => {
// 	return {
// 		name: "Rurda" + value,
// 		age: value,
// 	};
// });

// const c = uu.find((value) => value.name === "Rurda3");
// const d = uu.find((value) => value.age <= 4);

// console.log(uu);
// console.log(c);
// console.log(d);

const o = [1, 2, 3, 4, 5];

const sum = o.reduce((acc, value, index) => acc + value, 0);

console.log(sum);

const p = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const flat = p.reduce((acc, value) => acc.concat(value), []);

console.log(flat);
console.log(flat.length);
