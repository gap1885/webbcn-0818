'use strict';

function main() {
  var nodes1 = document.querySelectorAll('.list-articles h4');
  
  for (var ix = 0; ix < nodes1.length; ix++) {
    nodes1[ix].addEventListener('click', function (event) {
      var h4 = event.currentTarget;
      var article = h4.parentNode;
      var content = article.querySelector('div');
      content.classList.toggle('hide');
    });
  };


  var mainButton = document.querySelector('.site-nav .button');

    mainButton.addEventListener('mouseover', function (event) {
      event.target.classList.toggle('button-inverted');
    });
    mainButton.addEventListener('mouseout', function (event) {
      event.target.classList.toggle('button-inverted');
    });


  var secondaryButton = document.querySelectorAll('.list-articles a');

  for (var ix = 0; ix < secondaryButton.length; ix++) {
    secondaryButton[ix].addEventListener('mouseover', function (event) {
      event.target.classList.toggle('button-inverted');
    });
    secondaryButton[ix].addEventListener('mouseout', function (event) {
      event.target.classList.toggle('button-inverted');
    });
  };
};




window.addEventListener('load', main);
