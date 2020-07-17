
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
let centerX = innerWidth/2
let centerY = innerHeight/2

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

function Circle(orbit, radius, color) {
  this.x = centerX;
  this.y = centerY;
  this.orbit = orbit;  // distance from center
  this.radius = radius;
  this.minRadius = radius;
  this.radians = Math.PI
  this.velocity = 0.01
  this.color = color;

  this.draw = function() {
    let coordX = this.x
    let coordY = this.y
    c.beginPath();

    c.arc(coordX, coordY, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = this.color
    c.stroke();
    c.fillStyle = this.color
    c.fill()
  }

  this.update = function() {
    // Move points over time
    this.radians += this.velocity
    // console.log('this.x',this.x)
    this.x = centerX + Math.cos(this.radians) * this.orbit
    this.y = centerY + Math.sin(this.radians) * this.orbit
    
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
  let sun = new Circle(0,43,'yellow')
  let mercury = new Circle(105,5,'darkred')
  let venus = new Circle(145,9,'lightgreen')
  let earth = new Circle(210,16,'lightblue')
  let mars = new Circle(280,8,'red')

  circleArray.push(sun,mercury,venus,earth,mars)

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