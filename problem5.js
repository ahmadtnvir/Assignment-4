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
// const arr = [7,8,3,4,5];
// const arr = [7,8,3,4,5];
// const arr = "[6,2]";
// const arr = 7;
// const arr = [6];
// const arr = [13,2,6,7,10];
// const arr = [13, 2];
const arr = [3, 5, 7, 11, 6];
// const serial = 3;
// const serial = '9';
// const serial = 9;
// const serial = 10;
// const serial = 4;
// const serial = 6;
const serial = 10;
const input = waitingTime(arr, serial);
console.log(input);
