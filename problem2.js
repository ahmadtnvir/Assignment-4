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

// const input = sendNotification("sadia8icloud.com");
// const input = sendNotification("fahim234.hotmail.com");
// const input = sendNotification("nadim.naem5@outlook.com");
// const input = sendNotification("farhan34@yahoo.com");
const input = sendNotification("zihad@gmail.com");
console.log(input);
