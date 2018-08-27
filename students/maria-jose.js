'use strict'

var node = document.querySelector('section.experiments h2');

node.addEventListener('click', function(event){
  var parent = event.currentTarget.parentNode;
  var div = parent.querySelector('div');
  div.classList.toggle('hidden');
  var expand = parent.querySelector('.expand');
  var collapse = parent.querySelector('.collapse');
  expand.classList.toggle('hidden');
  collapse.classList.toggle('hidden');
})


// for (var ix = 0; ix < nodes.length; ix++) {
//     nodes[ix]=addEventListener('click', function(event) {
//     var parent = event.currentTarget.parentNode;
//     var list = parent.querySelector('list');
//     list.classList.toggle('hidden');
//   });
// };


//for (var ix = 0; ix < nodes.length; ix++) {
//  nodes[ix]=addEventListener('click', function(event) {
//    var h2 = event.currentTarget;
//    var section = h2.parentNode;
//    section.classList.toggle = 'expanded';
//  });
//};