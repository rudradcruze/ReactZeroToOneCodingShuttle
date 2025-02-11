// console.log("Calling the api");

// const resoponses = fetch("https://dummyjson.com/users");

// resoponses
// 	.then((data) => {
// 		console.log("Got the responces", data);

// 		const result = data.json();
// 		result.then((usersData) => {
// 			const users = usersData.users;

// 			for (let user of users) {
// 				console.log(user.id, user.firstName);
// 			}
// 		});
// 	})
// 	.catch((error) => {
// 		console.log("Got the error", error);
// 	});

// console.log("Got the responces", resoponses);

// const promies = new Promise((resolve, reject) => {
// 	const allGood = false;
// 	setTimeout(() => {
// 		console.log("Helllo");
// 		if (!allGood) {
// 			reject("Something went wrong");
// 		}
// 		resolve("Secret Data");
// 	}, 5000);
// });

// promies
// 	.then((data) => {
// 		console.log("Got the data", data);
// 	})
// 	.catch((error) => {
// 		console.log("Got the error", error);
// 	});

// console.log("Promies is already running");

// channing of promises

// const res = fetch("https://dummyjson.com/users")
// 	.then((data) => {
// 		return data.json();
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	})
// 	.finally(() => {
// 		console.log("Finally block");
// 	});

// initiate the booking
//  add the guest
//  process the payment

function initiateBooking(name) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Initiating the booking");
			resolve({
				bookingId: 1234,
				name,
			});
		}, 2000);
	});
}

function addGuest(booking, guest) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Adding the guest");
			booking["guest"] = guest;
			resolve(booking);
			// reject("Gutest are not valied", guest);
		});
	});
}

function processPayment(booking, payment) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Payment processed");
			booking["payment"] = payment;
			resolve(booking);
		});
	});
}

// initiateBooking("Rudra")
// 	.then((booking) => {
// 		console.log("Get the booking", booking);
// 		return addGuest(booking, ["Rahul", "Lira"]);
// 	})
// 	.then((booking) => {
// 		console.log("Get the booking", booking);
// 		return processPayment(booking, {
// 			paymentId: "asjhdja",
// 			amount: 2000,
// 		});
// 	})
// 	.then((booking) => {
// 		console.log("Get the booking", booking);
// 	})
// 	.catch((error) => {
// 		console.log("Error", error);
// 	});

// async function

async function bookingProcess() {
	try {
		let booking = await initiateBooking("Rudra");
		booking = await addGuest(booking, ["Rahul", "Lira"]);
		booking = await processPayment(booking, {
			paymentId: "asjhdja",
			amount: 2000,
		});

		console.log("Booking", booking);
	} catch (error) {
		console.log("Error", error);
	}
}

bookingProcess();
