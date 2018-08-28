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
  
  function findStudents(terms) {
    var results = [];

    if(terms) {
      results = students.filter(function(student) {
        return student.name.toLowerCase().indexOf(terms) >= 0; 
      });
    };
    return results;  
  }

  function displayResults(results) {
    var searchResults = document.querySelector('.search .search-results');
    searchResults.innerHTML = '';

    var ul = document.createElement('ul');
    results.forEach(function(student) {
      var link= document.createElement('a');
      link.innerText= student.name;
      link.setAttribute('href', '../' + student.url);

      var li = document.createElement('li');
      li.appendChild(link);
      ul.appendChild(li);
    });
    
    searchResults.appendChild(ul);
  }

  function handleChange() {
    var searchTerms = input.value.toLowerCase();
    var results = findStudents(searchTerms);
    displayResults(results);
  }

  var input = document.querySelector('.search input');
  input.addEventListener('keyup', handleChange);

}

window.addEventListener('load', main);

