export function bindInput(onMove, onPause) {
  document.addEventListener('keydown', event => {
    if (event.target.closest('button') && [' ', 'Enter'].includes(event.key)) return;
    if (['ArrowLeft', 'a', 'A', 'ArrowRight', 'd', 'D'].includes(event.key)) {
      event.preventDefault();
      onMove(['ArrowLeft', 'a', 'A'].includes(event.key) ? -1 : 1);
    }
    if (event.code === 'Space' || event.key === 'Escape') { event.preventDefault(); onPause(); }
  });
  document.querySelector('#left').onclick = () => onMove(-1);
  document.querySelector('#right').onclick = () => onMove(1);
  document.querySelector('#pause').onclick = onPause;
  const canvas = document.querySelector('canvas');
  let startX = null;
  canvas.addEventListener('pointerdown', event => { startX = event.clientX; canvas.setPointerCapture(event.pointerId); });
  canvas.addEventListener('pointerup', event => {
    if (startX !== null && Math.abs(event.clientX - startX) > 20) onMove(event.clientX > startX ? 1 : -1);
    startX = null;
  });
  canvas.addEventListener('pointercancel', () => { startX = null; });
}
