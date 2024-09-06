let runningCount = 0;
let totalDecks = 6;
let remainingDecks = totalDecks / 2; // Shoe cut in half

const runningCountDisplay = document.getElementById('running-count');
const trueCountDisplay = document.getElementById('true-count');
const betSuggestion = document.getElementById('bet-suggestion');

document.querySelectorAll('.card-btn').forEach(button => {
  button.addEventListener('click', () => {
    const cardValue = parseInt(button.getAttribute('data-value'));
    runningCount += cardValue;
    updateCount();
  });
});

function updateCount() {
  runningCountDisplay.textContent = runningCount;
  let trueCount = Math.round(runningCount / remainingDecks);
  trueCountDisplay.textContent = trueCount;

  if (trueCount >= 2) {
    betSuggestion.textContent = "Raise your bet!";
  } else {
    betSuggestion.textContent = "";
  }
}
