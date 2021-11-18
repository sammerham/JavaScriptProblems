'use strict'
function processLogs(logs, maxSpan) {
  const result = [];
  const sortedLogs = logs.map(el => el.split(" ").map(el => +el ? +el : el)).sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < sortedLogs.length - 1; i++) {
    let firstLog = sortedLogs[i];
    let secondLog = sortedLogs[i + 1];
    if (firstLog[0] === secondLog[0]) {
      if (Math.abs(firstLog[1] - secondLog[1]) <= maxSpan) {
        result.push(firstLog[0].toString());
      }
    }
  }
  return result;
}

const logs = ["99 1 sign-in", "100 10 sign-in", "50 20 sign-in", "100 15 sign-out", "50 26 sign-out", "99 2 sign-out"]

console.log(processLogs(logs, 40))