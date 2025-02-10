// export function greetings() {
// 	console.log("Hello, World!");
// }

// export const PI = 22 / 7;

function greetings() {
	console.log("Hello, World!");
}

const PI = 22 / 7;

export default function add(a, b) {
	return a + b;
}

export { greetings, PI as PI_VALUE };
