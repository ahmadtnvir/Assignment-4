function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  if (obj.testScore > 50 || obj.schoolGrade > 30) {
    return "Invalid Input";
  }
  let totalMarks = obj.testScore + obj.schoolGrade;

  if (obj.isFFamily) {
    totalMarks += 20;
  }
  return totalMarks >= 80;
}
const object = {
  name: "Rajib",
  testScore: 15,
  // testScore: 45,
  schoolGrade: 25,
  //   schoolGrade: 25,
  isFFamily: true,
  // isFFamily: false,
};
const input = calculateFinalScore(object);
console.log(input);
