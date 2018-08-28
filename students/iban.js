'use strict';

function main() {
  var nodes = document.querySelectorAll('.profile h2');
  
  for (var ix = 0; ix < nodes.length; ix++) {
    nodes[ix].addEventListener('click', function (event) {
      var h2 = event.currentTarget;
      var profile = h2.parentNode;
      profile.classList.toggle('hide');
    });
  };
}

window.addEventListener('load', main);