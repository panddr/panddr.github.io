// var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(callback, element) {
//   return window.setTimeout(callback, 300);
// };

// var render = function() {
//   rAF(render);
// };

// render();

window.addEventListener('scroll', function() {
  var offset = window.pageYOffset,
      logo = document.querySelectorAll('div.vein-logo img');

      offset     = offset / 10;

  // logo[0].style.transform = 'rotate(' + offset + 'deg)';
  logo[0].style["-webkit-transform"] = 'rotate(' + offset + 'deg)';
});
