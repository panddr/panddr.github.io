var demoButton = document.getElementById('demo-button'),
    demoIsPlaying = false,
    demoIsRecording = false,
    songIsPlaying = false,
    loopSound = null,
    soundTimer = [],
    recordButton = document.getElementById('record-button'),
    stopButton = document.getElementById('stop-button'),
    playButton = document.getElementById('play-button'),
    saveButton = document.getElementById('save-button'),
    cancelButton = document.getElementById('cancel-button'),
    startTime,
    stopTime,
    duration,
    song = new Object(),
    durationPanel = document.getElementById('duration-panel'),
    body = document.getElementsByTagName("body")[0],
    stopDuration,
    durationTimer;

demoButton.onclick = function() {
  if (!demoIsPlaying) {
    demoIsPlaying = true;
    body.classList.add('hide-controls');

    for (var i = 0; i < demo.sounds.length; i++) {
      var data = demo.sounds[i];

      function playSound() {
        var sound = eval(data.sound);

        if (data.isLoop) {
          loopSound = sound;

          soundTimer.push(setTimeout(function() {
            if (sound.isPlaying()) {
              sound.stop();
            } else {
              sound.loop();
            }
          }, data.time));

          soundTimer.push(setTimeout(function() {
            demoIsPlaying = false;
            body.classList.remove('hide-controls');
            sound.stop();
          }, demo.duration));
        } else {
          soundTimer.push(setTimeout(function() {
            sound.play();
          }, data.time));

          soundTimer.push(setTimeout(function() {
            demoIsPlaying = false;
            body.classList.remove('hide-controls');
          }, demo.duration));
        }
      }

      playSound();
    }
  } else {
    demoIsPlaying = false;
    body.classList.remove('hide-controls');

    if (loopSound) {
      loopSound.stop();
    }

    for (var i = 0; i < soundTimer.length; i++) {
      clearTimeout(soundTimer[i]);
    }

    soundTimer = [];
  }
}

recordButton.onclick = function() {
  demoIsRecording = true;
  song.sounds = new Array();
  startTime = new Date();

  stopButton.classList.remove('hide');
  demoButton.classList.add('hide');
  this.classList.add('hide');
  durationPanel.classList.remove('hide');
  body.classList.add('hide-controls');

  function countDuration() {
    var currentTime = new Date();
    var m = currentTime.getMinutes() - startTime.getMinutes();
    var s = currentTime.getSeconds() - startTime.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    durationPanel.innerHTML = m + ":" + s;
    durationTimer = setTimeout(countDuration, 300);
  }

  stopDuration = function() {
    clearTimeout(durationTimer);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

  countDuration();
}

window.addEventListener('keydown', e => {
  if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
    return;
  }

  const charCode = e.charCode || e.which || e.keyCode;
  key = String.fromCharCode(charCode).toUpperCase();

  if (demoIsRecording && localStorage.getItem(key)) {
    sound = localStorage.getItem(key);
    time = new Date().getTime() - startTime;

    var soundObj = new Object();

    song.sounds.push(soundObj);

    soundObj.sound = sound;
    soundObj.time = time;

    if (localStorage.getItem(key) == 'drums1') {
      soundObj.isLoop = true;
    }
  }
});

stopButton.onclick = function() {
  demoIsRecording = false;
  stopTime = new Date().getTime();

  duration = stopTime - startTime;

  song.duration = duration;

  playButton.classList.remove('hide');
  saveButton.classList.remove('hide');
  cancelButton.classList.remove('hide');
  this.classList.add('hide');

  stopDuration();

  for (var i = 0; i < sounds.length; i++) {
    var sound = eval(sounds[i].getAttribute("id"));
    sound.stop();
  }
}

playButton.onclick = function() {
  if (!songIsPlaying) {
    songIsPlaying = true;

    for (var i = 0; i < song.sounds.length; i++) {
      var data = song.sounds[i];

      function playSound() {
        var sound = eval(data.sound);

        if (data.isLoop) {
          loopSound = sound;

          soundTimer.push(setTimeout(function() {
            if (sound.isPlaying()) {
              sound.stop();
            } else {
              sound.loop();
            }
          }, data.time));

          soundTimer.push(setTimeout(function() {
            songIsPlaying = false;
            sound.stop();
          }, song.duration));
        } else {
          soundTimer.push(setTimeout(function() {
            sound.play();
          }, data.time));

          soundTimer.push(setTimeout(function() {
            songIsPlaying = false;
            body.classList.remove('hide-controls');
          }, song.duration));
        }
      }

      playSound();
    }
  } else {
    songIsPlaying = false;

    if (loopSound) {
      loopSound.stop();
    }

    for (var i = 0; i < soundTimer.length; i++) {
      clearTimeout(soundTimer[i]);
    }

    soundTimer = [];
  }
}

cancelButton.onclick = function() {
  playButton.classList.add('hide');
  saveButton.classList.add('hide');
  cancelButton.classList.add('hide');
  durationPanel.classList.add('hide');
  demoButton.classList.remove('hide');
  recordButton.classList.remove('hide');
  body.classList.remove('hide-controls');
}

saveButton.onclick = function() {
  var url = 'data:text/json;charset=utf8,' + encodeURIComponent(JSON.stringify(song));
  window.open(url, '_blank');
  window.focus();
}
