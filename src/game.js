export const TYPES = [
  { name: 'QUICK SYNC?', message: '“Just a quick sync.” +5 seconds', color: '#a38dba' },
  { name: '27 EMAILS', message: 'Replying all… +5 seconds', color: '#e7b863' },
  { name: 'BAD BADGE', message: 'Access denied. Again. +5 seconds', color: '#d77d71' },
];

export function createGame(character = 'male') {
  return { character, lane: 1, time: 0, distance: 0, obstacles: [], spawn: 1, delay: 0, hits: 0, status: 'playing', notice: '', noticeTime: 0 };
}

export function move(game, direction) {
  if (game.status === 'playing' && !game.delay) game.lane = Math.max(0, Math.min(2, game.lane + direction));
}

export function update(game, dt, random = Math.random) {
  if (game.status !== 'playing') return;
  game.time += dt;
  game.noticeTime = Math.max(0, game.noticeTime - dt);
  if (game.delay > 0) game.delay = Math.max(0, game.delay - dt);
  else game.distance += dt;
  game.spawn -= dt;
  if (game.spawn <= 0 && !game.delay) {
    game.obstacles.push({ lane: Math.floor(random() * 3), type: Math.floor(random() * TYPES.length), y: -70, hit: false });
    game.spawn = 1.25 + random() * .45;
  }
  for (const obstacle of game.obstacles) {
    if (!game.delay) obstacle.y += (155 + game.distance * .65) * dt;
    if (!obstacle.hit && obstacle.y >= 425 && obstacle.y < 505 && obstacle.lane === game.lane) {
      obstacle.hit = true;
      game.hits++;
      game.time += 5;
      game.delay = .8;
      game.notice = TYPES[obstacle.type].message;
      game.noticeTime = 1.8;
    }
  }
  game.obstacles = game.obstacles.filter(obstacle => obstacle.y < 620);
  if (game.time >= 78) game.status = 'lost';
  else if (game.distance >= 60) game.status = 'won';
}

export function croissants(game) {
  return Math.max(0, Math.ceil(12 * (1 - game.time / 78)));
}
