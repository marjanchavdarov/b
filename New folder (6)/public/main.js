import { createStore } from './store.js';
import { renderBoard, rollDice } from './ui.js';

const store = createStore();

window.onload = () => {
  renderBoard(store);
  const root = document.getElementById('game-root');
  const rollBtn = document.createElement('button');
  rollBtn.textContent = "🎲 Roll Dice";
  rollBtn.onclick = () => {
    const [d1, d2] = rollDice(store);
    diceDisplay.textContent = `🎲 ${d1} - 🎲 ${d2}`;
  };
  const diceDisplay = document.createElement('div');
  diceDisplay.id = 'dice-display';
  diceDisplay.className = 'dice';
  root.appendChild(rollBtn);
  root.appendChild(diceDisplay);
};
