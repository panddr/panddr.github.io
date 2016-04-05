var key,
    demo,
    previousElement = null,
    soundId = null,
    sound = null;

function setup() {
  createCanvas(windowWidth, windowHeight);

  amplitudeDrumLoop1 = new p5.Amplitude();
  amplitudeDrumLoop1.setInput(drums1);

  snareAmplitude = new p5.Amplitude();
  snareAmplitude.setInput(snare);

  kickAmplitude = new p5.Amplitude();
  kickAmplitude.setInput(kick);

  pad1Amplitude = new p5.Amplitude();
  pad1Amplitude.setInput(pad1);
  pad2Amplitude = new p5.Amplitude();
  pad2Amplitude.setInput(pad2);
  pad3Amplitude = new p5.Amplitude();
  pad3Amplitude.setInput(pad3);
  pad4Amplitude = new p5.Amplitude();
  pad4Amplitude.setInput(pad4);

  lead1Amplitude = new p5.Amplitude();
  lead1Amplitude.setInput(lead1);
  lead2Amplitude = new p5.Amplitude();
  lead2Amplitude.setInput(lead2);
  lead3Amplitude = new p5.Amplitude();
  lead3Amplitude.setInput(lead3);
  lead4Amplitude = new p5.Amplitude();
  lead4Amplitude.setInput(lead4);

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

function playSound() {
  if (sound !== drums1) {
    if (sound.isPlaying() ) {
      if (sound == pad1) { wave1.init(); }
      if (sound == pad2) { wave2.init(); }
      if (sound == pad3) { wave3.init(); }
      if (sound == pad4) { wave4.init(); }
      if (sound == kick) { sticks.init(); }
      if (sound == snare) { particles.init(); }
      sound.stop();
      sound.play();
    } else {
      if (sound == pad1) { wave1.init(); }
      if (sound == pad2) { wave2.init(); }
      if (sound == pad3) { wave3.init(); }
      if (sound == pad4) { wave4.init(); }
      if (sound == kick) { sticks.init(); }
      if (sound == snare) { particles.init(); }
      sound.play();
    }
  } else {
    if (sound.isPlaying()) {
      sound.stop();
    } else {
      sound.loop();
    }
  }
}

if (!localStorage.getItem('tipIsShown', 'true')) {
  selectMessage.innerHTML = 'Select sound';
}

window.addEventListener('keydown', e => {
  if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
    return;
  }

  const charCode = e.charCode || e.which || e.keyCode;
  key = String.fromCharCode(charCode).toUpperCase();

  setSelected();

  if (localStorage.getItem(key) && !songIsPlaying && !demoIsPlaying) {
    sound = eval(localStorage.getItem(key));
    playSound();
  } else if (soundId && !localStorage.getItem(sound) && !songIsPlaying && !demoIsPlaying) {
    localStorage.setItem(key, soundId);
    localStorage.setItem(soundId, 'selected');
    localStorage.setItem('tipIsShown', 'true');

    setSelected();
    soundId = false;

    clearButton.classList.remove('hide');
    selectMessage.innerHTML = 'Hurray!';

    setTimeout(function() {
      selectMessage.classList.add('hide');
    }, 1000);
  }
});

for (var i = 0; i < sounds.length; i++) {
  sounds[i].onclick = function() {
    soundId = this.getAttribute("id");
    sound = eval(soundId);

    if (previousElement) {
      var previousSound = eval(previousElement.getAttribute("id"));
    }

    playSound();

    if (!localStorage.getItem(this.getAttribute("id"))) {
      this.classList.add('selected');

      selectMessage.innerHTML = 'Now type a key';
    }

    if (previousSound && previousSound!=this) {
      previousElement.classList.remove('selected');
    }

    if (previousSound && previousSound == drums1 && !localStorage.getItem(previousSound)) {
      previousSound.stop();
    }

    previousElement = this;
  }
};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  lead1 = loadSound('/assets/sounds/lead1.mp3');
  lead2 = loadSound('/assets/sounds/lead2.mp3');
  lead3 = loadSound('/assets/sounds/lead3.mp3');
  lead4 = loadSound('/assets/sounds/lead4.mp3');
  snare = loadSound('/assets/sounds/snare.mp3');
  kick = loadSound('/assets/sounds/kick.mp3');
  pad1 = loadSound('/assets/sounds/pad1.mp3');
  pad2 = loadSound('/assets/sounds/pad2.mp3');
  pad3 = loadSound('/assets/sounds/pad3.mp3');
  pad4 = loadSound('/assets/sounds/pad4.mp3');
  drums1 = loadSound('/assets/sounds/drum_loop1.mp3');

  demo = loadJSON('/assets/demos/jekka.json');
}
