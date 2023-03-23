let inputString = "Jakarta";
let outputString = "";

for (let i = 0; i < inputString.length; i++) {
  if (inputString[i] === "a") {
    outputString += "o";
  } else {
    outputString += inputString[i];
  }
}

console.log(outputString);