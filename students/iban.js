'use strict';

function main() {
  var textToHide = document.querySelectorAll('profile mainText');
  
  for (var ix = 0; ix < textToHide.length; ix++) {
    textToHide[ix].addEventListener('click', function (event) {
      var mainText = event.currentTarget;
      var profile = mainText.parentNode;q
      profile.classList.toggle('hide');
    });
  };
}

window.addEventListener('load', main);