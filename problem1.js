function calculateTax(income, expenses) {
  if (
    typeof income !== "number" ||
    typeof expenses !== "number" ||
    income < 0 ||
    expenses < 0 ||
    expenses > income
  ) {
    return "Invalid Input";
  }

  const totalIncome = income - expenses;
  const tax = (totalIncome * 20) / 100;
  return tax;
}

// const input = calculateTax(6000, -1500);
// const input = calculateTax(-5000, 2000);
// const input = calculateTax(7000, 7000);
// const input = calculateTax(5000, 1500);
// const input = calculateTax(34000, 1753);
const input = calculateTax(10000, 3000);
console.log(input);
