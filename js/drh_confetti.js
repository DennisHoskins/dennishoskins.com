import _DrhComponent from "./_drh_component.js";

export default class DrhConfetti extends _DrhComponent {

  particles = [];
  total = 128;
  running = false;

  constructor() { 
    super(`
      <style>
        canvas {
          pointer-events: none;
          position: absolute;
          width: 50vw;
          height: 75vh;
          transform: translate(-35%, -50%);
        }
      </style>
      <canvas></canvas>
    `);
    this.canvas = this.query("canvas");
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
    this.ctx = this.canvas.getContext("2d");
  }

  confetti(e) {
    const total = this.total + Math.floor(Math.random() * 50);
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.x
    const y = e.clientY - rect.y;
    const w = this.canvas.width;
    const h = this.canvas.height;
    for (var i = 0; i < total; i++) {
      // const p0 = new Point(w * 0.5, h * 0.5);
      const p0 = new Point(x, y);
      const p1 = new Point(Math.random() * w, Math.random() * h);
      const p2 = new Point(Math.random() * w, Math.random() * h);
      const p3 = new Point(Math.random() * w, h + 64);
      this.particles.push(new Particle(p0, p1, p2, p3));
    }
    if (!this.running) requestAnimationFrame(this.loop.bind(this));
  }

  random(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); }

  loop() {
    this.update();
    this.draw();
    this.running = this.isrunning();
    if (!this.running) return this.particles.length = 0;
    requestAnimationFrame(this.loop.bind(this));
  }

  update() { this.particles.forEach(p => p.update(this.canvas)); }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach(p => p.draw(this.ctx));
  }

  isrunning() {
    for (let i = 0; i < this.particles.length; i++) {
      if (this.particles[i].complete === false) return true;
    }
    return false;
  }

}

customElements.define("drh-confetti", DrhConfetti);

class Point {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }
}

class Particle {

  HALF_PI = Math.PI * 0.5;

  constructor (p0, p1, p2, p3) {
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.cube = new Point();
    this.time = 0;
    this.duration = 3 + Math.random() * 2;
    this.color =  '#' + Math.floor((Math.random() * 0xffffff)).toString(16);
    this.w = 8;
    this.h = 6;
    this.opacity = 1;
    this.timeStep = (1 / 60);
    this.complete = false;
  }

  update(canvas) {
    this.time = Math.min(this.duration, this.time + this.timeStep);
    const f = this.outCubic(this.time, 0, 1, this.duration);
    this.cube = this.cubeBezier(this.p0, this.p1, this.p2, this.p3, f, this.cube);
    const dx = this.cube.x - this.x;
    const dy = this.cube.y - this.y;
    this.r =  Math.atan2(dy, dx) + this.HALF_PI;
    this.sy = Math.sin(Math.PI * f * 10);
    this.x = this.cube.x;
    this.y = this.cube.y;
    const fadeStart = canvas.height * 0.75;
    if (this.y >= fadeStart) this.opacity = Math.abs(1 - (this.y - fadeStart) / (canvas.height - fadeStart));
    this.complete = this.time === this.duration;
  }

  outCubic(t, b, c, d) {
    t /= d;
    t--;
    return c*(t * t * t + 1) + b;
  }

  cubeBezier(p0, c0, c1, p1, t, p) {
    const nt = (1 - t);
    p.x = nt * nt * nt * p0.x + 3 * nt * nt * t * c0.x + 3 * nt * t * t * c1.x + t * t * t * p1.x;
    p.y = nt * nt * nt * p0.y + 3 * nt * nt * t * c0.y + 3 * nt * t * t * c1.y + t * t * t * p1.y;
    return p;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.r);
    ctx.scale(1, this.sy);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fillRect(-this.w * 0.5, -this.h * 0.5, this.w, this.h);
    ctx.restore();
  }
}


