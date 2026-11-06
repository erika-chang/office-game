# Croissant Rush

A tiny pixel-art office runner. Reach Wednesday's croissants before your coworkers eat them all.

## Play locally

Serve this directory with any static web server, for example:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. No dependencies or build step.

Choose your office worker, then use arrow keys / A and D, swipe, or the onscreen buttons to switch lanes. Space or Escape pauses. Reach the 8th Floor Cantine in 60 running seconds before the 78-second croissant supply runs out. Dodge quick meetings, email piles, faulty badge readers, and stray office chairs. Obstacles appear every 0.95–1.3 seconds. Each collision adds five seconds and a brief interruption.

## Structure

- `src/main.js`: startup, screens, and animation loop
- `src/game.js`: state and gameplay
- `src/render.js`: original Canvas pixel art
- `src/input.js`: keyboard, touch, and buttons
- `styles.css`: responsive page styling

All game art is drawn in code. Space Grotesk is loaded from Google Fonts with a local monospace fallback. No paid resources, backend, or tracking.

## Free hosting

On a public GitHub repository, enable Settings → Pages → Deploy from a branch → main → / (root). The game is served directly, without a build. The expected address for this repository is https://erika-chang.github.io/office-game/ once Pages is enabled and these files are pushed.
