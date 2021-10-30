// function isVowel(char) {
//   return (
//     char === "a" ||
//     char === "e" ||
//     char === "i" ||
//     char === "o" ||
//     char === "u" ||
//     false
//   );
// }

function isVowel(char) {
  switch (char) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
    default:
      return false;
  }
}
const charInput = "a";
console.log("Check vowel", isVowel(charInput));
