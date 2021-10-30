function isPerfectNumber(inputNumber) {

  var sum = 0;

  for (let i = 1; i < inputNumber; i++) {
    if (inputNumber % i == 0) {
      sum += i;
    }
  }

  if (sum == inputNumber) {
    return true;
  }
  return false;
}
console.log(
  "8128 is",
  isPerfectNumber(8128) ? "a perfect number" : "not a perfect number"
);
