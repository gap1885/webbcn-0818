'use strict';

console.log("Hello");
function experiments() {

  var nodes = document.querySelectorAll('section.experiments h3');

  for (var ix = 0; ix < nodes.length; ix++) {
    nodes[ix].addEventListener('click', function (event) {
      var h3 = event.currentTarget;
      var div = h3.parentNode;
      var article = div.querySelector('article');
      article.classList.toggle('hidden')
  });
  }
}

window.addEventListener('load',experiments)