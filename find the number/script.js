const targetNumberEl = document.getElementById('targetNumber');
const countdownEl = document.getElementById('countdown');
const scoreEl = document.getElementById('score');
const bubblesEl = document.getElementById('bubbles');
const resultEl = document.getElementById('result');
const restartBtn = document.getElementById('restart');
const themeToggle = document.getElementById('themeToggle');

let targetNumber = 0;
let score = 0;
let timeLeft = 60;
let timer;

themeToggle.addEventListener('click', () => {
  const DocElem = document.documentElement;
  const isDark = DocElem.classList.toggle('dark');
  themeToggle.textContent = isDark ? '🌙' : '🌞';
});

function generateTargetNumber() {
  targetNumber = Math.floor(Math.random() * 10);
  targetNumberEl.textContent = targetNumber;
}

function generateBubbles() {
  bubblesEl.innerHTML = '';
  let correctPosition = Math.floor(Math.random() * 12); 
  for (let i = 0; i < 12; i++) {
    const number = i === correctPosition ? targetNumber : Math.floor(Math.random() * 10);
    const bubble = document.createElement('div');
    bubble.textContent = number;
    bubble.className =
      'w-12 h-12 flex items-center justify-center bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 rounded-full cursor-pointer hover:bg-blue-300 dark:hover:bg-blue-600';
    bubble.addEventListener('click', () => handleBubbleClick(number));
    bubblesEl.appendChild(bubble);
  }
}

function handleBubbleClick(number) {
  if (number === targetNumber) {
    score += 100;
  } else {
    score = Math.max(0, score - 10);
  }
  scoreEl.textContent = score;
  generateTargetNumber();
  generateBubbles();
}

function startCountdown() {
  timer = setInterval(() => {
    timeLeft--;
    countdownEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  resultEl.textContent = `Game Over! Your final score is: ${score}`;
  resultEl.classList.remove('hidden');
  restartBtn.classList.remove('hidden');
  bubblesEl.innerHTML = '';
}

function restartGame() {
  score = 0;
  timeLeft = 60;
  resultEl.classList.add('hidden');
  restartBtn.classList.add('hidden');
  scoreEl.textContent = score;
  countdownEl.textContent = timeLeft;
  generateTargetNumber();
  generateBubbles();
  startCountdown();
}

generateTargetNumber();
generateBubbles();
startCountdown();

restartBtn.addEventListener('click', restartGame);
