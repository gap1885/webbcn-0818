'use strict';

console.log("Hello");
function main() {

  var nodes = document.querySelectorAll('section.experiments h3');

  for (var ix = 0; ix < nodes.length; ix++) {
    nodes[ix].addEventListener('click', function (event) {
      var h3 = event.currentTarget;
      var div = h3.parentNode;
      var article = div.querySelector('article');
      article.classList.toggle('hidden')
    });
  }
  
  function findStudents(terms) {
    var results = [];
    if (terms) {
      results = students.filter(function (student) {
        return student.name.toLowerCase().indexOf(terms) >=0;
      });
    } 
    return results;
  }

  function displayResults(results) {
    var searchResults = document.querySelector('.quick-nav .results');
    searchResults.innerHTML = '';

    var ul = document.createElement('ul');

    results.forEach(function (student) {
      var link = document.createElement('a');

      var li = document.createElement('li');

      link.innerText = student.name;
      link.setAttribute('href', '../' + student.url);
      li.appendChild(link);
      ul.appendChild(li)
    });
    searchResults.appendChild(ul)
  }

  function handleChange() {
    var searchTerms = input.value;
    var results = findStudents(searchTerms);
    displayResults(results);
  }

  var input = document.querySelector('div.searchbox input');
  
  input.addEventListener('keyup', handleChange);    

}

window.addEventListener('load',main)