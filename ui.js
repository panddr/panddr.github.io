var sounds = document.getElementsByClassName("sound");
var setSelected = function() {
  for (var i = 0; i < sounds.length; i++) {
    var isSelected = localStorage.getItem(sounds[i].getAttribute("id"));
    if (isSelected) {
      sounds[i].classList.add('active');
    } else {
      sounds[i].classList.remove('active');
    }
  };
}



var menuButton = document.getElementById('menu-button');
var closeButton = document.getElementById('close-button');
var soundsWrapper = document.getElementById('sounds-wrapper');
var clearButton = document.getElementById('clear-button');
var fullScreenButton = document.getElementById('full-screen-button');

menuButton.onclick = function() {
  soundsWrapper.classList.add('active');
}

closeButton.onclick = function() {
  soundsWrapper.classList.remove('active');
}

clearButton.onclick = function() {
  localStorage.clear();
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


var isEditing = false;

