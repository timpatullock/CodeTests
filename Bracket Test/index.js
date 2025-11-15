const myTestArray = ["(", ")"];

function isValidBrackets(input) {
  console.log("input", input);
  const brackets = [];

  for (var i = 0; i < input.length; i++) {
    if (input[i] === ")") {
      if (brackets.length === 0) {
        return false;
      } else {
        brackets.pop();
      }
    } else if (input[i] === "(") {
      brackets.push(input[i]);
    }
  }
  if (brackets.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("Is Valid? ", isValidBrackets(myTestArray));
