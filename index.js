const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(stats) {
  const rec = stats.find(k => k.result === "W")
  return rec.year;
};
