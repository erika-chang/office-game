import { TYPES } from './game.js?v=45-second-rush';

export function render(ctx, game) {
  const rect = (x, y, w, h, color) => { ctx.fillStyle = color; ctx.fillRect(Math.round(x), Math.round(y), w, h); };
  const text = (value, x, y, size = 10, color = '#292b45') => { ctx.fillStyle = color; ctx.font = `bold ${size}px monospace`; ctx.textAlign = 'center'; ctx.fillText(value, x, y); };
  rect(0, 0, 480, 560, '#c9d2cd');
  rect(45, 0, 390, 560, '#e8e5dc');
  for (let y = -80 + (game.distance * 165) % 80; y < 560; y += 80) {
    rect(46, y, 388, 2, '#d3d1ca');
    rect(171, y + 12, 2, 40, '#d3d1ca'); rect(306, y + 12, 2, 40, '#d3d1ca');
    for (const x of [0, 440]) {
      rect(x, y + 10, 40, 42, '#7e938e');rect(x + 4, y + 14, 32, 28, '#aebdb4');
      rect(x + 11, y + 18, 18, 4, '#dce3d8');
    }
  }
  rect(45, 0, 5, 560, '#9ca9a1');rect(430, 0, 5, 560, '#9ca9a1');
  rect(120, 0, 240, 24, '#292b45');text('8TH FLOOR CANTINE ↑', 240, 16, 12, '#fff4d8');
  for (const obstacle of game.obstacles) {
    const x = 108 + obstacle.lane * 132, y = obstacle.y;
    const type = TYPES[obstacle.type];
    rect(x - 39, y + 48, 82, 9, '#c9c5bf');
    if (obstacle.type === 0) {
      rect(x - 13, y - 7, 26, 25, '#e8b38b');rect(x - 16, y - 12, 32, 10, '#66504b');
      rect(x - 24, y + 18, 48, 31, type.color);rect(x - 4, y + 18, 8, 26, '#fff4d8');
    } else if (obstacle.type === 1) {
      for (let i = 0; i < 3; i++) { rect(x - 30 + i * 5, y + 18 - i * 10, 55, 30, '#a17d43');rect(x - 27 + i * 5, y + 20 - i * 10, 49, 23, '#f4d58e'); }
      text('@', x + 7, y + 22, 22);
    } else if (obstacle.type === 2) {
      rect(x - 33, y - 5, 66, 58, '#596e72');rect(x - 24, y + 3, 48, 28, '#292b45');
      text('×', x, y + 25, 26, '#f18b79');rect(x - 8, y + 39, 16, 6, '#d77d71');
    } else {
      rect(x - 23, y - 8, 46, 30, '#496e69');rect(x - 19, y - 4, 38, 22, type.color);
      rect(x - 29, y + 21, 58, 12, type.color);rect(x - 4, y + 33, 8, 13, '#59616b');
      rect(x - 27, y + 44, 54, 5, '#59616b');rect(x - 30, y + 47, 10, 8, '#292b45');rect(x + 20, y + 47, 10, 8, '#292b45');
    }
    rect(x - 49, y - 32, 98, 18, type.color);text(type.name, x, y - 19, 10);
  }
  const x = 108 + game.lane * 132, y = 468;
  const step = Math.sin(game.distance * 19) * 5;
  rect(x - 22, y + 49, 44, 8, '#b8bbb0');
  rect(x - 15, y + 28, 12, 22 + step, '#292b45');rect(x + 3, y + 28, 12, 22 - step, '#292b45');
  rect(x - 19, y + 47 + step, 16, 7, '#493f42');rect(x + 3, y + 47 - step, 16, 7, '#493f42');
  if (game.character === 'female') rect(x - 19, y - 22, 38, 43, '#654440');
  rect(x - 23, y + 1, 46, 31, game.character === 'female' ? '#c46c54' : '#627c99');
  rect(x - 30, y + 7 + step, 9, 24, '#e8b38b');rect(x + 21, y + 7 - step, 9, 24, '#e8b38b');
  rect(x - 14, y - 19, 28, 25, '#e8b38b');rect(x - 17, y - 25, 34, 12, '#654440');
  rect(x - 4, y + 7, 8, 18, '#f8ead1');rect(x - 2, y + 10, 4, 15, '#e5b85f');
  rect(x + 24, y + 24 - step, 15, 18, '#936a4c');
  if (game.distance > 55) {rect(50, 65 + (game.distance - 55) * 65, 380, 8, '#edc36b');text('🥐  8TH FLOOR CANTINE  🥐', 240, 55 + (game.distance - 55) * 65, 17);}
}
