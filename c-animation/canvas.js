
// Resize the Canvas
let canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')


function Circle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;


  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = this.color
    c.stroke();
    c.fillStyle = this.color
    c.fill()
  }

  this.update = function() {
    if (this.x + radius > innerWidth || this.x - radius < 0) {
      this.dx = -this.dx
    }
    if (this.y + radius > innerWidth || this.y - radius < 0) {
      this.dy = -this.dy
    }
  
    this.x += this.dx;
    this.y += this.dy;
    this.draw()
  }
}

let colorArray = ['rgba(255, 0, 0, 0.2)','rgba(0, 255, 0, 0.2)','rgba(0, 0, 255, 0.2)']

var circleArray = []

for (let i = 0; i < 50; i++) {
  let radius = (Math.random()+0.1) * 30
  let x = Math.random() * (innerWidth - radius*2) + radius;
  let y = Math.random() * (innerHeight - radius*2) + radius
  let dx = (Math.random() - 0.5) * 4
  let dy = (Math.random() - 0.5) * 4
  let color = colorArray[Math.floor(Math.random()*3)]
  circleArray.push(new Circle(x, y, dx, dy, radius, color))
}

function animate() {
  requestAnimationFrame(animate)
  
  c.clearRect(0,0,innerWidth,innerHeight)

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }

}

animate()

console.log(canvas)