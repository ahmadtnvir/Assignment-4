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

function sendNotification(email) {
  email = email.trim();
  if (typeof email !== "string" || !email.includes("@")) {
    return "Invalid Email";
  }
  let count = 0;
  for (const alphabets of email) {
    if (alphabets === "@") {
      count++;
    }
  }
  if (count > 1) {
    return "Invalid Email";
  }
  const inputEmail = email.split("@");
  if (inputEmail.length > 2 || inputEmail[0] === "" || inputEmail[1] === "") {
    return "Invalid Email";
  }
  const userName = inputEmail[0];
  const domainName = inputEmail[1];
  if (!domainName.includes(".")) {
    return "Invalid Email";
  }
  const output = `${userName} sent you an email from ${domainName}.`;
  return output;
}

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

function waitingTime(waitingTimes, serialNumber) {
  if (
    !Array.isArray(waitingTimes) ||
    typeof serialNumber !== "number" ||
    serialNumber <= waitingTimes.length
  ) {
    return "Invalid Input";
  }
  let totalTime = 0;
  for (const time of waitingTimes) {
    totalTime += time;
  }
  const avgTime = Math.round(totalTime / waitingTimes.length);
  const candidatesBefore = serialNumber - 1;
  const remainingCandidates = candidatesBefore - waitingTimes.length;
  const haveToWait =
    remainingCandidates > 0 ? avgTime * remainingCandidates : 0;
  return haveToWait;
}
