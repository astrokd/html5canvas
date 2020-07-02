console.log('testtest')

// Resize the Canvas
let canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')

// Rectangle
c.fillStyle = 'rgba(255, 0, 0, 0.2)'
c.fillRect(100, 100, 100, 100)
c.fillStyle = 'rgba(0, 255, 0, 0.2)'
c.fillRect(400, 100, 100, 100)
c.fillStyle = 'rgba(0, 0, 255, 0.2)'
c.fillRect(300, 300, 100, 100)

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100)
c.lineTo(400, 300)
c.strokeStyle = "blue"
c.stroke()

// Arc / Circle
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'green'
c.stroke();



console.log(canvas)