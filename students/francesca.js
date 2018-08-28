'use strict'

  var nodes = document.querySelectorAll('article h4');

  function main() {
    for (var ix = 0; ix < nodes.length; ix++) {
      nodes[ix].addEventListener('click', function (event) {
        var h4 = event.currentTarget;
        var article = h4.parentNode;
        article.classList.toggle('is-expanded')
      })
    }

    var input = document.querySelector('.sub-header input');
    input.addEventListener('keyup', handleChange);

    function findStudents(terms) {
      var results = [];

      if (terms) {
        results = students.filter( function(student) {
          return student.name.toLowerCase().indexOf(terms) >= 0;
        });
      };
      return results;
    };

    function displayResults(results) {
      var searchResults =  document.querySelector('.sub-header .search-results');
      searchResults.innerHTML = '';

      if (!results.length) {
        return;
      }
      
      var ul = document.createElement('ul');
      
      results.forEach(function (student) {
        var link = document.createElement('a');
        
        var li = document.createElement('li');

        link.innerText = student.name;
        link.setAttribute('href', '../' + student.url);
        
        li.appendChild(link);
        ul.appendChild(li);
      });

      searchResults.appendChild(ul);

    };

    function handleChange() {
      var searchTerms = input.value;
      var results = findStudents(searchTerms);
      
      displayResults(results)
      
    };

  };

  window.addEventListener('load', main);