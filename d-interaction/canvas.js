
// Resize the Canvas
let canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')
var circleArray = []

let mouse = {
  x: undefined,
  y: undefined
}

let maxRadius = 50
let mouseRadius = 60
let speed = 2
// let minRadius = 10

window.addEventListener('mousemove', 
    function(event) {
      mouse.x = event.x
      mouse.y = event.y
      // console.log('mouseevent',mouse)
})

window.addEventListener('resize', function()
  {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    init()
})

function Circle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
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

    // interactivity
    if (mouse.x - this.x < mouseRadius && mouse.x - this.x > -mouseRadius 
        && mouse.y - this.y < mouseRadius && mouse.y - this.y > -mouseRadius
        ) {
        if (this.radius < maxRadius) {
          this.radius += 1
        }
    } else if (this.radius > this.minRadius) {
        this.radius -= 1
    }

    this.draw()
  }
}

let colorArray = [
  '#248EA6',
  '#84BFA4',
  '#F2E74B',
  '#F2D49B',
  '#D94141'
]

function init() {
  circleArray = []
  for (let i = 0; i < 500; i++) {
    let radius = Math.random() * 3 + 1
    let x = Math.random() * (innerWidth - radius*2) + radius;
    let y = Math.random() * (innerHeight - radius*2) + radius
    let dx = (Math.random() - 0.5) * speed
    let dy = (Math.random() - 0.5) * speed
    let color = colorArray[Math.floor(Math.random()*colorArray.length)]
    circleArray.push(new Circle(x, y, dx, dy, radius, color))
  }
}
init()

function animate() {
  requestAnimationFrame(animate)
  
  c.clearRect(0,0,innerWidth,innerHeight)

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }

}

animate()

console.log(canvas)