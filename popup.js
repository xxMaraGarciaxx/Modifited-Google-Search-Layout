function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let changeColor = document.getElementById('changeColor');

   changeColor.onclick = function(element) {
   setInterval(()=>{
    let randomColor = getRandomColor();
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
       chrome.tabs.executeScript(
         tabs[0].id,
         {code: 'document.body.style.backgroundColor = "' + randomColor + '";'});
        });
   }, 2000)
  };
