const makeChange = (c) => 
  // your name her
	 return {
    q: Math.floor(c / 25), // Number of quarters
    d: Math.floor((c % 25) / 10), // Number of dimes
    n: Math.floor((c % 25 % 10) / 5), // Number of nickels
    p: c % 5 // Remaining pennies
  };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
