var dataP5 = [];

function midi() {
  var log = console.log.bind(console),
      keyData = document.getElementById('key_data'),
      midi;
  var AudioContext = AudioContext || webkitAudioContext; // for ios/safari
  var context = new AudioContext();
  var btnBox = document.getElementById('content'),
      btn = document.getElementsByClassName('button');
  var data, cmd, channel, type, note, velocity;

  // request MIDI access
  if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess({
      sysex: false
    }).then(onMIDISuccess, onMIDIFailure);
  } else {
    alert("No MIDI support in your browser.");
  }

  // prepare audio files
  for (var i = 0; i < btn.length; i++) {
    addAudioProperties(btn[i]);
  }
  // this maps the MIDI key value (60 - 64) to our samples
  var sampleMap = {
    key60: 1,
    key61: 2,
    key62: 3,
    key63: 4,
    key64: 5,
    key65: 6,
    key66: 7,
    key67: 8,
    key68: 9,
    key69: 10,
    key70: 11,
    key71: 12
  };
  // user interaction, mouse click
  function clickPlayOn(e) {
    e.target.classList.add('active');
    e.target.play();
  }

  function clickPlayOff(e) {
    e.target.classList.remove('active');
  }

  // midi functions
  function onMIDISuccess(midiAccess) {
    midi = midiAccess;
    var inputs = midi.inputs.values();
    // loop through all inputs
    for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
      // listen for midi messages
      input.value.onmidimessage = onMIDIMessage;
      // this just lists our inputs in the console
      listInputs(input);
    }
    // listen for connect/disconnect message
    midi.onstatechange = onStateChange;
  }

  function onMIDIMessage(event) {
    data = event.data,
    cmd = data[0] >> 4,
    channel = data[0] & 0xf,
    type = data[0] & 0xf0, // channel agnostic message type. Thanks, Phil Burk.
    note = data[1],
    velocity = data[2];
    // with pressure and tilt off
    // note off: 128, cmd: 8
    // note on: 144, cmd: 9
    // pressure / tilt on
    // pressure: 176, cmd 11:
    // bend: 224, cmd: 14

    switch (type) {
      case 144: // noteOn message
         noteOn(note, velocity);
         break;
      case 128: // noteOff message
        noteOff(note, velocity);
        break;
    }

    //console.log('data', data, 'cmd', cmd, 'channel', channel);
    logger(keyData, 'key data', data);
  }

  function onStateChange(event) {
      var port = event.port,
          state = port.state,
          name = port.name,
          type = port.type;
      if (type == "input") console.log("name", name, "port", port, "state", state);
  }

  function listInputs(inputs) {
    var input = inputs.value;
    log("Input port : [ type:'" + input.type + "' id: '" + input.id +
        "' manufacturer: '" + input.manufacturer + "' name: '" + input.name +
        "' version: '" + input.version + "']");
  }

  function noteOn(midiNote, velocity) {
    player(midiNote, velocity);
  }

  function noteOff(midiNote, velocity) {
    player(midiNote, velocity);
  }

  function player(note, velocity) {
    var sample = sampleMap['key' + note];
    if (sample) {
      if (type == (0x80 & 0xf0) || velocity == 0) { //QuNexus always returns 144
        btn[sample - 1].classList.remove('active');
        return;
      }
      btn[sample - 1].classList.add('active');
      // btn[sample - 1].play(velocity);
      dataP5[sample - 1].sound.play();
      // if (btn[sample - 1].dataset.animation) {
      //   eval(btn[sample - 1].dataset.animation);
      // }
    }
  }

  function onMIDIFailure(e) {
    log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + e);
  }

  // audio functions
  // We'll go over these in detail in future posts
  function loadAudio(object, url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';
    request.onload = function () {
      context.decodeAudioData(request.response, function (buffer) {
        object.buffer = buffer;
      });
    }
    request.send();
  }

  function addAudioProperties(object) {
    var obj = {};
    obj.animation = object.dataset.animation;
    obj.sound = loadSound(object.dataset.sound);
    dataP5.push(obj);

    // object.name = object.id;
    // object.source = object.dataset.sound;
    // loadAudio(object, object.source);
    // object.play = function (volume) {
    //   var s = context.createBufferSource();
    //   var g = context.createGain();
    //   var v;
    //   s.buffer = object.buffer;
    //   s.playbackRate.value = randomRange(0.5, 2);
    //   if (volume) {
    //     v = rangeMap(volume, 1, 127, 0.2, 2);
    //     s.connect(g);
    //     g.gain.value = v * v;
    //     g.connect(context.destination);
    //   } else {
    //     s.connect(context.destination);
    //   }

    //   s.start();
    //   object.s = s;
    // }
  }

  // utility functions
  function randomRange(min, max) {
    return Math.random() * (max + min) + min;
  }

  function rangeMap(x, a1, a2, b1, b2) {
    return ((x - a1) / (a2 - a1)) * (b2 - b1) + b1;
  }

  function frequencyFromNoteNumber(note) {
    return 440 * Math.pow(2, (note - 69) / 12);
  }

  function logger(container, label, data) {
    messages = label + " [channel: " + (data[0] & 0xf) + ", cmd: " + (data[0] >> 4) + ", type: " + (data[0] & 0xf0) + " , note: " + data[1] + " , velocity: " + data[2] + "]";
    container.textContent = messages;
  }
}