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
