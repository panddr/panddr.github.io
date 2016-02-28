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

  triangleShape1 = new TriangleShape(lead1Amplitude, 'rgba(238, 49, 36, 1)', 1000, 300, 1600, height/10, height/3);
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

  wave1.calcWave();
  wave2.calcWave();
  wave3.calcWave();
  wave4.calcWave();

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

function keyTyped() {
  var button = keyCode;

  setSelected();

  // for (var i = 0; i < sounds.length; i++)  {
  //   var sound = sounds[i].getAttribute("id");

  //   sound = function() {
  //     console.log('shit')
  //   }

  //   console.log(sound)
  // }

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
    if (!pad1Sound.isPlaying() ) {
      pad1Sound.play();
    }
  }

  function pad2() {
    if (!pad2Sound.isPlaying() ) {
      pad2Sound.play();
    }
  }

  function pad3() {
    if (!pad3Sound.isPlaying() ) {
      pad3Sound.play();
    }
  }

  function pad4() {
    if (!pad4Sound.isPlaying() ) {
      pad4Sound.play();
    }
  }

  function lead1() {
    if (!lead1Sound.isPlaying() ) {
      lead1Sound.play();
    }
  }

  function lead2() {
    if (!lead2Sound.isPlaying() ) {
      lead2Sound.play();
    }
  }

  function lead3() {
    if (!lead3Sound.isPlaying() ) {
      lead3Sound.play();
    }
  }

  function lead4() {
    if (!lead4Sound.isPlaying() ) {
      lead4Sound.play();
    }
  }

  function snare() {
    if (!snareSound.isPlaying() ) {
      particles.init();
      snareSound.play();
    }
  }

  function kick() {
    if (!kickSound.isPlaying() ) {
      sticks.init();
      kickSound.play();
    }
  }

  if (localStorage.getItem(keyCode)) {
    var sound = localStorage.getItem(keyCode) + '()';
    eval(sound);
  } else {
    soundsWrapper.classList.add('active');

    for (var i = 0; i < sounds.length; i++) {
      var playButton = sounds[i].querySelector('#play');
      var selectButton = sounds[i].querySelector('#select');

      playButton.onclick = function() {
        var playSound = this.parentNode.parentNode.getAttribute("id") + '()';
        eval(playSound);
      }

      selectButton.onclick = function() {
        var sound = this.parentNode.parentNode.getAttribute("id");
        localStorage.setItem(button, sound);
        localStorage.setItem(sound, 'selected');
        this.parentNode.classList.add('active');
        soundsWrapper.classList.remove('active');

        myDiv = createDiv('The sound was successfully selected').id('success');

        setTimeout(function() {
          select('#success').remove();
        }, 2000);
      }
    };
  }

  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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
