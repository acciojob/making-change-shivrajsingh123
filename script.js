function makeChange(amount) {
  let q = Math.floor(amount / 25);       // quarters
  amount = amount % 25;

  let d = Math.floor(amount / 10);       // dimes
  amount = amount % 10;

  let n = Math.floor(amount / 5);        // nickels
  amount = amount % 5;

  let p = amount;                        // pennies

  return { q, d, n, p };
}
