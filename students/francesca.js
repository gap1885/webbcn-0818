'use strinct'

  var nodes = document.querySelectorAll('article h4');

  function main() {
    for (var ix = 0; ix < nodes.length; ix++) {
      nodes[ix].addEventListener('click', function (event) {
        var h4 = event.currentTarget;
        var article = h4.parentNode;
        article.classList.toggle('is-expanded')
      })
    }
  };

  window.addEventListener('load', main);