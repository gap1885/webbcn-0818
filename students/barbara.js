'use strict'

function main() {
  var nodes = document.querySelectorAll('section h2');
  
  for (var ix = 0; ix < nodes.length; ix++) {
    nodes[ix].addEventListener('click', function (event) {
      var h2 = event.currentTarget;
      var section = h2.parentNode;
      section.classList.toggle('expanded');
    });
  };

  function findStudents(terms) {
    var results = [];
    
    if (terms) {
      results = students.filter(function (student) {
        return student.name.toLowerCase().indexOf(terms) >= 0;
      });
    };
    return results;
  };

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
  };

  function handleChange() {
    var searchTerms = input.value.toLowerCase();
    var results = findStudents(searchTerms);
    displayResults(results);
  };

  var input = document.querySelector('.quick-nav .search input');
  input.addEventListener('keyup', handleChange);

  var searchResults = document.querySelector('.quick-nav .search-results');

  document.body.addEventListener('click', function() {
    searchResults.innerHTML = '';
  });

  input.addEventListener('click', function(event) {
    event.stopPropagation();
  });

  input.addEventListener('focus', handleChange);

  document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) { 
      searchResults.innerHTML = '';
   } 
});
};

window.addEventListener('load', main);


// Async challenge
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  
  return {
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

