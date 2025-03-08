const makeChange = (c) => {
  // your name her
	 c = parseInt(c); // Ensure input is treated as a number

  return {
    q: Math.floor(c / 25), // Number of quarters
    d: Math.floor((c % 25) / 10), // Number of dimes
    n: Math.floor((c % 10) / 5), // Number of nickels
    p: c % 5 // Number of pennies
  };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
