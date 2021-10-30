
function decimalToBinary(number) {
  
  let bin = "" ;

  while (number > 0) {
    bin = number % 2 + bin;
    number = Math.floor(number / 2);
  }
  return bin;
}
console.log("", decimalToBinary(10))


function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
      //  console.log(
      //       `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
      //   );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}

console.log(convertToBinary(6))