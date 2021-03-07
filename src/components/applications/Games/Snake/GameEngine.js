class GameEngine {
  lastRender = 0;
  snakeSpeed = 1;
  main = (currentTime) => {
    const renderInterval = (currentTime - this.lastRender) / 1000;
    window.requestAnimationFrame(this.main);
    if (renderInterval < 1 / this.snakeSpeed) return;
    this.lastRender = currentTime;
    console.log(renderInterval);
  };
}
export default GameEngine;
