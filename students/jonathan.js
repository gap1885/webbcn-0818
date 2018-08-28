'use strict';


function main() {

  var navButton = document.getElementById('nav-button');

  navButton.addEventListener('click', function (event) {
    var h3 = event.currentTarget;
    var nav = h3.parentNode;
    nav.classList.toggle('hidden');
  });


  var nodes = document.querySelectorAll('article.card');
  
  for (var ix = 0; ix < nodes.length; ix++) {
    nodes[ix].addEventListener('click', function (event) {
      var h3 = event.currentTarget;
      var article = h3.parentNode;
      // var list = nav.querySelector('ul')
      article.classList.toggle('hidden');
    });
  };


  var input = document.querySelector('#quick-jump')

  input.addEventListener('keyup', handleChange)

  function findStudents(terms) {
    var results = [];

    if (terms) {
      var results = students.filter(function(item){
        if (item.name.toLowerCase().indexOf(terms) !== -1) {
          return true;
        }; if (item.name.indexOf(terms) !== -1) {
          return true;
        };
        return false;
      });
    };
    return results;
  }

  function displayResults(results) {
    var searchResults = document.querySelector('.quick-nav .search-results');
    searchResults.innerHTML = '';
    
    var ul = document.createElement('ul');
    results.forEach(function (student) {
      var link = document.createElement('a');
      link.innerText = student.name;
      link.setAttribute('href', '../' + student.url);

      var li = document.createElement('li');
      li.appendChild(link);
      
      ul.appendChild(li);
    });   
    searchResults.appendChild(ul);
  }

  function handleChange() {
    var searchTerms = input.value;
    var results = findStudents(searchTerms);
    displayResults(results);

    console.log(results);
  }

}

window.addEventListener('load', main);