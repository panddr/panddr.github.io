var sounds = document.getElementsByClassName("sound");
var setSelected = function() {
  for (var i = 0; i < sounds.length; i++) {
    var isSelected = localStorage.getItem(sounds[i].getAttribute("id"));
    if (isSelected) {
      sounds[i].classList.add('active');
      sounds[i].classList.remove('selected');
    } else {
      sounds[i].classList.remove('active');
    }
  };
}

setSelected();

// var recordButton = document.getElementById('record-button');
var menu = document.getElementById('menu');
var clearButton = document.getElementById('clear-button');
var fullScreenButton = document.getElementById('full-screen-button');

// recordButton.onclick = function() {
//   var start = new Date().getTime();

//   console.log(start)
// }

clearButton.onclick = function() {
  localStorage.clear();
  setSelected();
  document.getElementById('select-message').innerHTML = 'Select sound';
  document.getElementById('select-message').classList.remove('hide');
}



function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

fullScreenButton.onclick = function() {
  launchIntoFullscreen(document.documentElement);
}




// document.addEventListener("DOMContentLoaded", function() {
//   var canvas = document.getElementsByTagName('canvas');

//   console.log(canvas)

//   canvas[.onclick = function() {
//     this.classList.remove('selected');
//     document.getElementById('select-message').innerHTML = '';
//     sound = false;

//     console.log('shit')
//   }
// });
