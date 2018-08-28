'use strict';

function main() {
  var nodes = document.querySelectorAll('profile description');
  
  for (var ix = 0; ix < nodes.length; ix++) {
    nodes[ix].addEventListener('click', function (event) {
      var description = event.currentTarget;
      var profile = description.parentNode;
      profile.classList.toggle('hide');
    });
  };
}

window.addEventListener('load', main);