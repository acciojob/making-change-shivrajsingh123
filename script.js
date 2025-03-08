const makeChange = (c) => {
  // your name her
	c = parseInt(c); // Ensure input is treated as a number

  let q = Math.floor(c / 25); // Number of quarters
  let d = Math.floor((c % 25) / 10); // Number of dimes
  let remaining = c % 25 % 10; // Remaining cents after quarters & dimes
  
  let n = Math.floor(remaining / 5); // Number of nickels
  let p = remaining % 5; // Number of pennies

  return { q, d, n, p };
  };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
