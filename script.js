const makeChange = (c) => {
  // your name her
	let c = {
        q: Math.floor(amount / 25),  // Number of quarters
        d: Math.floor((amount % 25) / 10),  // Remaining amount converted to dimes
        n: Math.floor((amount % 10) / 5),  // Remaining amount converted to nickels
        p: amount % 5  // Remaining amount as pennies
    };

    return c;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
