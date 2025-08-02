const bg = document.getElementById('background');

  const tileX = 107;
  const tileY = 123; 

  const text = 'EXONEGE ';

  function fillBackground() {
    bg.innerHTML = '';

    const cols = Math.ceil(window.innerWidth / tileX) + 2;
    const rows = Math.ceil(window.innerHeight / tileY) + 2;

    for (let y = -1; y < rows; y++) {
      for (let x = -2; x < cols; x++) {
        const tile = document.createElement('div');
        tile.className = 'text-tile';
        tile.style.left = `${x * tileX}px`;
        tile.style.top = `${y * tileY}px`;
        tile.textContent = text;
        bg.appendChild(tile);
      }
    }
  }

  window.addEventListener('resize', fillBackground);
  fillBackground();