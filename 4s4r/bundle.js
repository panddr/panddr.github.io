var icons = document.querySelectorAll(".icon");
var videos = document.getElementsByTagName("video");

icons[0].addEventListener("mouseover", function() {
  videos[0].classList.add('focus');
  videos[0].play();
});
icons[0].onmouseout = function() {
  videos[0].classList.remove('focus');
  videos[0].pause();
}

icons[1].addEventListener("mouseover", function() {
  videos[1].classList.add('focus');
  videos[1].play();
});
icons[1].onmouseout = function() {
  videos[1].classList.remove('focus');
  videos[1].pause();
}

icons[2].addEventListener("mouseover", function() {
  videos[2].classList.add('focus');
  videos[2].play();
});
icons[2].onmouseout = function() {
  videos[2].classList.remove('focus');
  videos[2].pause();
}

icons[3].addEventListener("mouseover", function() {
  videos[3].classList.add('focus');
  videos[3].play();
});
icons[3].onmouseout = function() {
  videos[3].classList.remove('focus');
  videos[3].pause();
}

icons[4].addEventListener("mouseover", function() {
  videos[4].classList.add('focus');
  videos[4].play();
});
icons[4].onmouseout = function() {
  videos[4].classList.remove('focus');
  videos[4].pause();
}

icons[5].addEventListener("mouseover", function() {
  videos[5].classList.add('focus');
  videos[5].play();
});
icons[5].onmouseout = function() {
  videos[5].classList.remove('focus');
  videos[5].pause();
}

icons[6].addEventListener("mouseover", function() {
  videos[6].classList.add('focus');
  videos[6].play();
});
icons[6].onmouseout = function() {
  videos[6].classList.remove('focus');
  videos[6].pause();
}
