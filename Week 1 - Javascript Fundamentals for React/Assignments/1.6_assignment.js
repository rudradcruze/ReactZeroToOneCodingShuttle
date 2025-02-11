const palindrome = (str) => {
	const reversed = str.split("").reverse().join("");
	return str === reversed;
};

console.log(palindrome("racecar racecar"));
