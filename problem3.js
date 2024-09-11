function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  for (const char of name) {
    if (char >= "0" && char <= "9") {
      return true;
    }
  }
  return false;
}
// const input = checkDigitsInName(["Raj"]);
// const input = checkDigitsInName("!@#");
// const input = checkDigitsInName("Name2024");
// const input = checkDigitsInName("Suman");
// const input = checkDigitsInName("Raj123");
console.log(input);
