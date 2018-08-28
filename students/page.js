'use strict';

function main() {
  var title = document.querySelector('section.hobbies h3');
  title.addEventListener('click', function (event) {
    var h3 = event.currentTarget;
    var div = h3.parentNode;
    var wrap = div.querySelector('.wrap');
    wrap.classList.toggle('hide');
  });
}
window.addEventListener('load', main);