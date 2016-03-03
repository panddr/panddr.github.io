var key,
    sound;

function setup() {
  createCanvas(windowWidth, windowHeight);

  amplitudeDrumLoop1 = new p5.Amplitude();
  amplitudeDrumLoop1.setInput(drumLoopSound1);

  snareAmplitude = new p5.Amplitude();
  snareAmplitude.setInput(snareSound);

  kickAmplitude = new p5.Amplitude();
  kickAmplitude.setInput(kickSound);

  pad1Amplitude = new p5.Amplitude();
  pad1Amplitude.setInput(pad1Sound);
  pad2Amplitude = new p5.Amplitude();
  pad2Amplitude.setInput(pad2Sound);
  pad3Amplitude = new p5.Amplitude();
  pad3Amplitude.setInput(pad3Sound);
  pad4Amplitude = new p5.Amplitude();
  pad4Amplitude.setInput(pad4Sound);

  lead1Amplitude = new p5.Amplitude();
  lead1Amplitude.setInput(lead1Sound);
  lead2Amplitude = new p5.Amplitude();
  lead2Amplitude.setInput(lead2Sound);
  lead3Amplitude = new p5.Amplitude();
  lead3Amplitude.setInput(lead3Sound);
  lead4Amplitude = new p5.Amplitude();
  lead4Amplitude.setInput(lead4Sound);

  wave1 = new Wave(pad1Amplitude, width/4, height/4 + 300, 240, '#6CC071');
  wave1.init();

  wave2 = new Wave(pad2Amplitude, width/4, height/4 + 200, 180, '#70CF76');
  wave2.init();

  wave3 = new Wave(pad3Amplitude, width/4, height/4 + 100, 140, '#89D77D');
  wave3.init();

  wave4 = new Wave(pad4Amplitude, width/4, height/4, 100, '#97E48B');
  wave4.init();

  triangleShape1 = new TriangleShape(lead1Amplitude, '#DA322A', 1000, 300, 1600, height/10, height/3);
  triangleShape2 = new TriangleShape(lead2Amplitude, '#FF8243', -800, -200, -1200, height/8, height/3);
  triangleShape3 = new TriangleShape(lead3Amplitude, '#FFC743', 600, 100, 1000, height/6, height/3);
  triangleShape4 = new TriangleShape(lead4Amplitude, '#FFE855', -400, -100, -800, height/5, height/3);

  particles = new Particles(snareAmplitude, '#174489', width/2+100, height/3);
  particles.init();

  sticks = new Sticks(kickAmplitude, 0, width/2+300, height/3);
  sticks.init();

  // particlesLoop = new Particles(amplitudeDrumLoop1, '#174489', width/2+100, height/3);
  // particlesLoop.init();

  // sticksLoop = new Sticks(amplitudeDrumLoop1, 0, width/2+100, height/3);
  // sticksLoop.init();
}

function draw() {
  background('rgba(255,255,255,1)');
  noStroke();

  triangleShape1.draw();
  triangleShape2.draw();
  triangleShape3.draw();
  triangleShape4.draw();

  wave1.draw();
  wave2.draw();
  wave3.draw();
  wave4.draw();

  circle();
  // particlesLoop.draw();
  // sticksLoop.draw();

  particles.draw();
  sticks.draw();
}

function circle() {
  level = amplitudeDrumLoop1.getLevel();
  size = map(level, 0, 1, 0, 300);
  push();
  fill('#174489');
  ellipse(width/2-20, height/3*2, size, size);
  pop();
}

if (!localStorage.getItem('tipIsShown', 'true')) {
  document.getElementById('select-message').innerHTML = 'Select sound ☛';
}

window.addEventListener('keydown', e => {
  if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
    return;
  }

  const charCode = e.charCode || e.which || e.keyCode;
  key = String.fromCharCode(charCode).toUpperCase();

  setSelected();

  if (localStorage.getItem(key)) {
    var playSound = localStorage.getItem(key) + '()';
    eval(playSound);
  } else if (sound && !localStorage.getItem(sound)) {
    localStorage.setItem(key, sound);
    localStorage.setItem(sound, 'selected');
    localStorage.setItem('tipIsShown', 'true');

    var playSound = localStorage.getItem(key) + '()';
    eval(playSound);
    setSelected();
    sound = false;

    clearButton.classList.remove('hide');
    document.getElementById('select-message').innerHTML = 'Hurray!';

    setTimeout(function() {
      document.getElementById('select-message').classList.add('hide');
    }, 1000);
  }
});

for (var i = 0; i < sounds.length; i++) {
  var previousSound;

  sounds[i].onclick = function() {
    var playSound = this.getAttribute("id") + '()';
    sound = this.getAttribute("id");
    eval(playSound);

    if (!localStorage.getItem(this.getAttribute("id"))) {
      this.classList.add('selected');

      document.getElementById('select-message').innerHTML = 'Now type a key';
    }

    if (previousSound && previousSound!=this) {
      previousSound.classList.remove('selected');
    }

    previousSound = this;
  }
};


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drums1() {
  if (drumLoopSound1.isPlaying() ) {
    drumLoopSound1.stop();
  } else {
    drumLoopSound1.loop();
  }
}

function chord2() {
  if (!chord2Sound.isPlaying() ) {
    chord2Sound.play();
  }
}

function pad1() {
  if (pad1Sound.isPlaying() ) {
    wave1.init();
    pad1Sound.stop();
    pad1Sound.play();
  } else {
    wave1.init();
    pad1Sound.play();
  }
}

function pad2() {
  if (pad2Sound.isPlaying() ) {
    wave1.init();
    pad2Sound.stop();
    pad2Sound.play();
  } else {
    wave1.init();
    pad2Sound.play();
  }
}

function pad3() {
  if (pad3Sound.isPlaying() ) {
    wave1.init();
    pad3Sound.stop();
    pad3Sound.play();
  } else {
    wave1.init();
    pad3Sound.play();
  }
}

function pad4() {
  if (pad4Sound.isPlaying() ) {
    wave1.init();
    pad4Sound.stop();
    pad4Sound.play();
  } else {
    wave1.init();
    pad4Sound.play();
  }
}

function lead1() {
  if (lead1Sound.isPlaying() ) {
    lead1Sound.stop();
    lead1Sound.play();
  } else {
    lead1Sound.play();
  }
}

function lead2() {
  if (lead2Sound.isPlaying() ) {
    lead2Sound.stop();
    lead2Sound.play();
  } else {
    lead2Sound.play();
  }
}

function lead3() {
  if (lead3Sound.isPlaying() ) {
    lead3Sound.stop();
    lead3Sound.play();
  } else {
    lead3Sound.play();
  }
}

function lead4() {
  if (lead4Sound.isPlaying() ) {
    lead4Sound.stop();
    lead4Sound.play();
  } else {
    lead4Sound.play();
  }
}

function snare() {
  if (snareSound.isPlaying() ) {
    particles.init();
    snareSound.stop();
    snareSound.play();
  } else {
    particles.init();
    snareSound.play();
  }
}

function kick() {
  if (kickSound.isPlaying() ) {
    sticks.init();
    kickSound.stop();
    kickSound.play();
  } else {
    sticks.init();
    kickSound.play();
  }
}


function preload() {
  lead1Sound = loadSound('assets/sounds/lead1.mp3');
  lead2Sound = loadSound('assets/sounds/lead2.mp3');
  lead3Sound = loadSound('assets/sounds/lead3.mp3');
  lead4Sound = loadSound('assets/sounds/lead4.mp3');
  snareSound = loadSound('assets/sounds/snare.mp3');
  kickSound = loadSound('assets/sounds/kick.mp3');
  pad1Sound = loadSound('assets/sounds/pad1.mp3');
  pad2Sound = loadSound('assets/sounds/pad2.mp3');
  pad3Sound = loadSound('assets/sounds/pad3.mp3');
  pad4Sound = loadSound('assets/sounds/pad4.mp3');
  drumLoopSound1 = loadSound('assets/sounds/drum_loop1.mp3');
}
