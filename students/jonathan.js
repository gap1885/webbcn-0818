'use strict';

// function main() {
//   var nodes = document.querySelectorAll('nav h3');
  
//   for (var ix = 0; ix < nodes.length; ix++) {
//     nodes[ix].addEventListener('click', function (event) {
//       console.log('Hola Johnny');
//       var h3 = event.currentTarget;
//       var nav = h3.parentNode;
//       // var list = nav.querySelector('ul')
//       nav.classList.toggle('hidden');
//     });
//   };
// }

// document.addEventListener('load', main);

function navButton() {
  var nodes = document.getElementById('navButton');

  for (var ix = 0; ix < nodes.length; ix++) {
    nodes[ix].addEventListener('click', function (event) {
      var h3 = event.currentTarget;
      var nav = h3.parentNode;
      // var list = nav.querySelector('ul')
      nav.classList.toggle('hidden');
    });
  };
}

document.addEventListener('load', navButton);