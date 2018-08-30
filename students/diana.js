'use strict';

function main() {

  var nodes = document.querySelectorAll('section.experiments h3');

  for (var ix = 0; ix < nodes.length; ix++) {
    nodes[ix].addEventListener('click', function (event) {
      var h3 = event.currentTarget;
      var div = h3.parentNode;
      var technologies = div.querySelector('.articles');
      technologies.classList.toggle('hidden')
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

  var searchResults = document.querySelector('.quick-nav .results');

  function displayResults(results) {
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

  document.body.addEventListener('click',function() {
    searchResults.innerHTML = '';
  });
  
  document.body.addEventListener('keyup',function(event) {
    event.preventDefault;
    if (event.key === 'Escape') {
      searchResults.innerHTML = '';
    }

  });

  input.addEventListener('click',function(event) {
    event.stopPropagation();    
  });
  
  input.addEventListener('focus', handleChange);
  
  //  ---- code counter ---//

  var timeLeft = 30;
  var timer = document.querySelector('.counter');
  var countDown = document.createElement('span');
  countDown.innerText = timeLeft;


  var counertId = setInterval(function() {
    if (timeLeft) {
      timeLeft--;
    } else {
      clearInterval(counertId);
    }
    countDown.innerText = timeLeft;
  }, 3000);

  timer.appendChild(countDown);


  
};

var lost = document.createElement('div');
div.innerHTML = `
  <main>
    <div class = "lost">
      <h2>You've lost!</h3>
      <img src="https://i.pinimg.com/originals/08/68/ab/0868ab440ea76d859e625d117fd821a0.gif" alt="" width="50%" >
    <div>
  </main>
`;

document.body.appendChild(div);




window.addEventListener('load',main)