'use stinct'

  var nodes = document.querySelectorAll('article h4');

  function main() {
    for (var ix = 0; ix < nodes.length; ix++) {
      nodes[ix].addEventListener('click', function (event) {
        var h4 = event.currentTarget;
        var article = h4.parentNode;
        var div = article.querySelector('div');
        div.classList.toggle('expanded');
        // var arrowDown = h4.firstElementChild;
        // var arrowUP = h4.lastElementChild; //why not .children
        // arrowUp.classList.toggle('expand');
        // arrowDown.classList.toggle('hide');
      })
    }
  };

  window.addEventListener('load', main);