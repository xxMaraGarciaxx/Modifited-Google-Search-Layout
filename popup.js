function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

setInterval(() => {
  let randomColor = getRandomColor()
  document.body.style.backgroundColor = `${randomColor}`
}, 1000)

let degree = 90

setInterval(() => {
  degree++
  document.body.style.transform = `rotate(${degree}deg)`
}, 50)

let percentageACT = 100
let percentageMIN = 50
let percentageMAX = 210
let step = 1
let increment = true

setInterval(() => {
  if (increment == true) {
    percentageACT += step
  } else {
    percentageACT -= step
  }
  if (percentageACT >= percentageMAX) {
    increment = false
  }
  if (percentageACT <= percentageMIN) {
    increment = true
  }
  document.body.style.zoom = `${percentageACT}%`
}, 100)
