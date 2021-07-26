const pattern_winner = [
  ["1", "2", "3"],
  ["1", "4", "7"],
  ["1", "5", "9"],
  ["9", "8", "7"],
  ["9", "5", "1"],
  ["9", "6", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["3", "5", "7"],
];

const current_player = ["4", "5", "6", "8"];
// ["1", "2", "3", "7", "9"];
// ["4", "5", "6", "8"]
const current = pattern_winner.map((item) => {
  const filtered = item.filter((i) => {
    if (!current_player.includes(i)) {
      return i;
    }
  });
  return filtered;
});


console.log(current);
