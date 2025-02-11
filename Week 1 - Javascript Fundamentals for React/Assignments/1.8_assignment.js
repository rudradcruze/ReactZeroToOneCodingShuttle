// Create a process for cart checkout Page using callback & Promises with async-await with the following steps. Here each step can contain a setTimeOut with 2 seconds to mimic the asynchronous delay.
// 	a. getOrderInfo
// 	b. checkIfAvailable
// 	c. placeOrder
// 	d. returnSuccess

// Solution:
function getOrderInfo(order) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Getting order info");
			resolve({
				orderId: order["orderId"],
				product: order["product"],
				amount: order["amount"],
				isAvailable: order["isAvailable"],
			});
		}, 2000);
	});
}

function checkIfAvailable(order) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Checking if available");
			if (order["isAvailable"]) {
				resolve(order);
			} else {
				reject("Product not available");
			}
		}, 2000);
	});
}

function placeOrder(order) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Placing order");
			order["status"] = "success";
			resolve(order);
		}, 2000);
	});
}

function returnSuccess(order) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Returning success");
			resolve(order);
		}, 2000);
	});
}

// calling the functions
const order = {
	orderId: 1234,
	product: "Mobile",
	amount: 20000,
	isAvailable: true,
};

async function cartCheckout(order) {
	try {
		let orderInfo = await getOrderInfo(order);
		orderInfo = await checkIfAvailable(orderInfo);
		orderInfo = await placeOrder(orderInfo);
		orderInfo = await returnSuccess(orderInfo);
		console.log("Order placed successfully", orderInfo);
	} catch (error) {
		console.log("Error", error);
	}
}

cartCheckout(order);

// Create a process for user signup using callback & Promises with async-await with the following steps. Here each step can contain a etTimeOut with 2 seconds to mimic the asynchronous delay.
// 	a. getUserInfo
// 	b. checkIfAlreadyPresent
// 	c. createAccount
// 	d. sendSignUpEmail
// 	e. and returnSuccess

function getUserInfo(user) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Getting user info");
			resolve({
				userId: user["userId"],
				email: user["email"],
				isPresent: user["isPresent"],
			});
		}, 2000);
	});
}

function checkIfAlreadyPresent(user) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Checking if already present");
			if (user["isPresent"]) {
				reject("User already present");
			} else {
				resolve(user);
			}
		}, 2000);
	});
}

function createAccount(user) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Creating account");
			user["status"] = "success";
			resolve(user);
		}, 2000);
	});
}

function sendSignUpEmail(user) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Sending sign up email");
			resolve(user);
		}, 2000);
	});
}

const user = {
	userId: 1234,
	email: "francisrudra@gmail.com",
	isPresent: false,
};

async function userSignUp(user) {
	try {
		let userInfo = await getUserInfo(user);
		userInfo = await checkIfAlreadyPresent(userInfo);
		userInfo = await createAccount(userInfo);
		userInfo = await sendSignUpEmail(userInfo);
		console.log("User signed up successfully", userInfo);
	} catch (error) {
		console.log("Error", error);
	}
}

userSignUp(user);
