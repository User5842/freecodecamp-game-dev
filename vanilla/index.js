const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const { height: CANVAS_HEIGHT, width: CANVAS_WIDTH } = canvas;

const playerImage = new Image();
playerImage.src = "boy.png";

const spriteHeight = 564;
const spriteWidth = Math.floor(46050 / 75);

const animationType = {
  DEAD: 0,
  IDLE: 15,
  JUMP: 30,
  RUN: 45,
  WALK: 60,
};

let currentAnimationType = animationType.JUMP;
let frameX = 0;
let gameFrame = 0;
let staggerFrame = 2;

function animate() {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  context.drawImage(
    playerImage,
    (frameX + currentAnimationType) * spriteWidth,
    0,
    spriteHeight,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  /**
   * Only update the frame when the current `gameFrame`
   * is divisible by the `staggerFrame`. This provides a
   * simple way to control the "speed" of our animation.
   */
  if (gameFrame % staggerFrame === 0) {
    frameX < 14 ? frameX++ : (frameX = 0);
  }

  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
