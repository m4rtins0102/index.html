const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

function Heart() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * 100;
  this.size = Math.random() * 20 + 10;
  this.speed = Math.random() * 1 + 0.5;
  this.opacity = Math.random();

  this.draw = function () {
    ctx.fillStyle = `rgba(255, 105, 180, ${this.opacity})`;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(this.x + 10, this.y - 20, this.x + 30, this.y + 20, this.x, this.y + 30);
    ctx.bezierCurveTo(this.x - 30, this.y + 20, this.x - 10, this.y - 20, this.x, this.y);
    ctx.fill();
  };

  this.update = function () {
    this.y -= this.speed;
    if (this.y < -30) {
      this.y = canvas.height + 30;
      this.x = Math.random() * canvas.width;
    }
    this.draw();
  };
}

function init() {
  for (let i = 0; i < 100; i++) {
    hearts.push(new Heart());
  }
}
init();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart) => heart.update());
  requestAnimationFrame(animate);
}
animate();