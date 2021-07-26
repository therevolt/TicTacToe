let current_player = "0";
let step_counter = 0;
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
const pattern_0 = [];
const pattern_1 = [];

document.querySelectorAll(".block").forEach((el) => {
  el.addEventListener("click", () => {
    if (current_player === "0" && !el.getAttribute("value")) {
      el.setAttribute("value", "0");
      pattern_0.push(el.getAttribute("id"));
      current_player = "1";
      checkWinner(pattern_0, 'Player 1')
      if (step_counter === 8) {
        document.dispatchEvent(new Event("endgame"));
      } else {
        step_counter += 1;
      }
    } else if (current_player === "1" && !el.getAttribute("value")) {
      el.setAttribute("value", "1");
      pattern_1.push(el.getAttribute("id"));
      current_player = "0";
      checkWinner(pattern_1, 'Player 2')
      if (step_counter === 8) {
        document.dispatchEvent(new Event("endgame"));
      } else {
        step_counter += 1;
      }
    }
  });
});

document.addEventListener("endgame", () => {
  console.log("game selesai");
  pattern_winner.some((comb) => {
    comb.every((index) => {
      console.log(index);
    });
  });
  console.log(pattern_0);
  console.log(pattern_1);
});

const checkWinner = (pattern, winner) => {
  const win = pattern_winner.map((item) => {
    const filtered = item.filter((i) => {
      if (!pattern.includes(i)) {
        return i;
      }
    });
    return filtered;
  });
  if (win.filter((item) => item.length === 0).length) {
    document.dispatchEvent(new Event("endgame"));
    console.log(`${winner} Pemenang Game ini`);
    return true
  }
};
