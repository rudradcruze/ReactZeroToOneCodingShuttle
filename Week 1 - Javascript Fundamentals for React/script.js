console.log("Code execution started");

// setTimeout(() => {
// 	console.log("Inside setTimeout");
// }, 2000);

const id = setTimeout(() => {
	console.log("Inside setTimeout");
}, 2000);

clearTimeout(id);

console.log("Code execution ended");

let i = 1;
function showTime() {
	const time = new Date();
	console.log(time.toISOString());

	i++;
	if (i > 5) {
		clearInterval(intervalId);
	}
}

const intervalId = setInterval(showTime, 1000);
