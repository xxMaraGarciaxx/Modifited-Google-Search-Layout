console.log('hello from popup')
function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

setInterval(() => {
  document.body.style.backgroundColor = getRandomColor()
}, 500)
