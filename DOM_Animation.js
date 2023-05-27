var id = setTimeout(Amin, 5000);

function Amin(){
  // var i = 1;
  // i += 1;
  var target = document.getElementById('animate');
  target.style.width = "500px";
}

function stopAnimation(){
  clearTimeout(id);
}

// setInterval

var count = 0;
var intId = setInterval(counter, 1000);

function counter(){

console.log(++count)

  }
