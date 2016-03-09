var soundsPack = document.getElementById('sounds-pack');


var sounds = document.getElementsByClassName("sound");
var setSelected = function() {
  for (var i = 0; i < sounds.length; i++) {
    var isSelected = localStorage.getItem(sounds[i].getAttribute("id"));
    if (isSelected) {
      sounds[i].classList.add('active');
      sounds[i].classList.remove('selected');
      soundsPack.classList.remove('active');
    } else {
      sounds[i].classList.remove('active');
    }
  };
}

setSelected();

var menu = document.getElementById('menu');
var clearButton = document.getElementById('clear-button');

if (!localStorage.getItem('tipIsShown', 'true')) {
  clearButton.classList.add('hide');
}

var selectMessage = document.getElementById('select-message');

clearButton.onclick = function() {
  localStorage.clear();
  setSelected();
  selectMessage.innerHTML = 'Select sound';
  selectMessage.classList.remove('hide');
  soundsPack.classList.add('active');

  clearButton.classList.add('hide');
  drums1.stop();
}



//fullscreen

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

var fullScreenButton = document.getElementById('full-screen-button');

fullScreenButton.onclick = function() {
  launchIntoFullscreen(document.documentElement);
}







var soundsUl = document.getElementById('sounds');
var sound = document.getElementsByClassName('sound');

var soundWidth = 100;

soundsUl.style.minWidth = soundWidth * sound.length + "px";
