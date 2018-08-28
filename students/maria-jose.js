'use strict'

function main () {
  var node = document.querySelector('section.experiments h2');
  
  node.addEventListener('click', function(event){
    var parent = event.currentTarget.parentNode;
    var div = parent.querySelector('div');
    div.classList.toggle('hidden');
    var expand = parent.querySelector('.expand');
    var collapse = parent.querySelector('.collapse');
    expand.classList.toggle('hidden');
    collapse.classList.toggle('hidden');
  });
}

window.addEventListener('load', main);