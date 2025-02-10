// write a JavaScript function that returns a passed string with letters in alphabetical order.

const sortString = (str = "hello world") => {
	return str.split("").sort().join("");
};

console.log(sortString("racecar hello world"));

// write a JavaScript function to calculate the average of marks passed in an array
const average = (...marks) => {
	const total = marks.reduce((acc, mark) => acc + mark, 0);
	return total / marks.length;
};

console.log(average(10, 20, 30, 40, 50));

// write a Javascript function to remove duplicates from an array using reduce method
const removeDuplicates = (arr) => {
	return arr.reduce((acc, value) => {
		if (!acc.includes(value)) {
			acc.push(value);
		}
		return acc;
	}, []);
};

console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));

// For the following input, use the reduce method to Group Items by Category

const products = [
	{ name: "Laptop", category: "Electronics" },
	{ name: "Shirt", category: "Clothing" },
	{ name: "Phone", category: "Electronics" },
	{ name: "Shoes", category: "Clothing" },
];

const groupedProducts = products.reduce((acc, product) => {
	if (!acc[product.category]) {
		acc[product.category] = [];
	}
	acc[product.category].push(product.name);
	return acc;
}, {});

console.log(groupedProducts);
