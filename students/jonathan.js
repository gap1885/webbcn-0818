'use strict';


function navButton() {
  var theButton = document.getElementById('nav-button');

  theButton.addEventListener('click', function (event) {
    var h3 = event.currentTarget;
    var nav = h3.parentNode;
    // var list = nav.querySelector('ul')
    nav.classList.toggle('hidden');
  });
}

window.addEventListener('load', navButton);


function articleCards() {
  var nodes = document.querySelectorAll('article.card');
  
  for (var ix = 0; ix < nodes.length; ix++) {
    nodes[ix].addEventListener('click', function (event) {
      var h3 = event.currentTarget;
      var article = h3.parentNode;
      // var list = nav.querySelector('ul')
      article.classList.toggle('hidden');
    });
  };
}

window.addEventListener('load', articleCards);