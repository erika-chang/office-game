# Croissant Rush

A tiny pixel-art office runner. Reach Wednesday's croissants before your coworkers eat them all.

## Play locally

Serve this directory with any static web server, for example:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. No dependencies or build step.

Choose your office worker, then use arrow keys / A and D, swipe, or the onscreen buttons to switch lanes. Space or Escape pauses. Run 60m to the 8th Floor Cantine before the 78-second croissant supply runs out. A clean run takes 45 seconds. Running and scrolling speed ramp up gradually, finishing 25% faster than the previous version. Collision pauses extend the run. Dodge quick meetings, email piles, faulty badge readers, and stray office chairs. Obstacles appear every 0.65–0.95 seconds. Collisions add time penalties (colleague: 7 seconds, email: 5, badge: 3, chair: 2), plus a brief interruption.

## Structure

- `src/main.js`: startup, screens, and animation loop
- `src/game.js`: state and gameplay
- `src/render.js`: original Canvas pixel art
- `src/input.js`: keyboard, touch, and buttons
- `styles.css`: responsive page styling

All game art is drawn in code. Space Grotesk is loaded from Google Fonts with a local monospace fallback. No paid resources, backend, or tracking.

## Free hosting

On a public GitHub repository, enable Settings → Pages → Deploy from a branch → main → / (root). The game is served directly, without a build. The expected address for this repository is https://erika-chang.github.io/office-game/ once Pages is enabled and these files are pushed.
