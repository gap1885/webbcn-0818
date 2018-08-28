'use strict';

function main() {
  var nodes = document.querySelectorAll('.description h2');
  
  for (var ix = 0; ix < nodes.length; ix++) {
    nodes[ix].addEventListener('click', function (event) {
      var h2 = event.currentTarget;
      var description = h2.parentNode.nextElementSibling;
      description.classList.toggle('hide');
    });
  };
}

window.addEventListener('load', main);