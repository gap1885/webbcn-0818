'use strict';

console.log("Hello");

var nodes = document.querySelectorAll('section.experiments h3');

for (var ix = 0; ix < nodes.length; ix++) {
nodes[ix].addEventListener('click', function 
(event) {
  var h3 = 
  var 
  event.currentTarget.h3.parentNode.section.experiments.querySelectorAll('h3').classList.toogle('hidden')
});
}