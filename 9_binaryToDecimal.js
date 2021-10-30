const binary = 110;
console.log("Dechimal", parseInt(binary, 2))

function binaryToDecimal(n)
{
    let num = n;
    let dec_value = 0;
 
    // Initializing base value to 1, i.e 2^0
    let base = 1;
 
    let temp = num;
    while (temp) {
        let last_digit = temp % 10;
        temp = Math.floor(temp / 10);
 
        dec_value += last_digit * base;
 
        base = base * 2;
    }
 
    return dec_value;
}
 
// Driver program to test above function
let num = 110;
  console.log("Binary to Dechimal", binaryToDecimal(num))