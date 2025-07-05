// Basic Game Setup

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('battle-canvas');
  const ctx = canvas.getContext('2d');

  // Game Variables
  let isGameRunning = true;

  // Basic Game Loop
  function gameLoop() {
    if (!isGameRunning) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Example drawing (a simple rectangle as a placeholder for your game)
    ctx.fillStyle = '#0f0';
    ctx.fillRect(50, 50, 100, 100);

    // Call the game loop recursively
    requestAnimationFrame(gameLoop);
  }

  // Start the game loop
  gameLoop();
});
