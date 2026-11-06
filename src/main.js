import { createGame, move, update, croissants } from './game.js?v=fabric-rush';
import { render } from './render.js?v=fabric-rush';
import { bindInput } from './input.js?v=fabric-rush';

const $ = selector => document.querySelector(selector);
const ctx = $('#game').getContext('2d');
let character = 'male';
let game = createGame(character);
game.status = 'ready';
let previous = 0;

for (const button of document.querySelectorAll('[data-character]')) {
  button.onclick = () => {
    character = button.dataset.character;
    game.character = character;
    for (const choice of document.querySelectorAll('[data-character]')) choice.setAttribute('aria-pressed', choice === button);
  };
}
$('#start').onclick = () => {
  if (game.status === 'paused') game.status = 'playing';
  else game = createGame(character);
  $('#overlay').hidden = true;
  $('#pause').hidden = false;
  $('#game').focus();
};
function showOverlay(title, message, button, showCharacters = false) {
  $('#title').textContent = title;
  $('#message').textContent = message;
  $('#start').textContent = button;
  $('#characters').hidden = !showCharacters;
  $('#overlay').hidden = false;
  $('#pause').hidden = true;
}
function pause() {
  if (game.status !== 'playing') return;
  game.status = 'paused';
  showOverlay('Taking a coffee break?', 'Your pastry pursuit is paused.', 'BACK TO THE RUSH →');
}
bindInput(direction => move(game, direction), pause);
document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
function frame(now) {
  const dt = Math.min((now - previous) / 1000, .05);
  previous = now;
  const before = game.status;
  update(game, dt);
  render(ctx, game);
  $('#distance').textContent = `${Math.max(0, Math.ceil(75 - game.distance))}m`;
  $('#croissants').textContent = `${croissants(game)} 🥐`;
  $('#clock').textContent = game.time >= 60 ? '09:00' : '08:59';
  $('#notice').textContent = game.notice;
  $('#notice').classList.toggle('visible', game.noticeTime > 0 && game.status === 'playing');
  if (before === 'playing' && game.status === 'won') showOverlay('Flaky. But on time.', `You made it! ${croissants(game)} croissants left. ${game.hits} office interruptions survived.`, 'ANOTHER WEDNESDAY? →', true);
  if (before === 'playing' && game.status === 'lost') showOverlay('Nothing but crumbs.', 'The tray is empty. Your inbox, unfortunately, is not.', 'TRY AGAIN →', true);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
