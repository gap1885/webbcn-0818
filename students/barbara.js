'use strict'

function main() {

  // - show hide experiments

  var nodes = document.querySelectorAll('section h2');
  
  for (var ix = 0; ix < nodes.length; ix++) {
    nodes[ix].addEventListener('click', function (event) {
      var h2 = event.currentTarget;
      var section = h2.parentNode;
      section.classList.toggle('expanded');
    });
  };

  // - student search

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

  // - play

  // var playButton = document.querySelector('.game .button');
  
  // playButton.addEventListener('click', countDown);

  // function countDown(counter) {
  //   playButton.removeEventListener('click', countDown);

  //   var description = document.querySelector('.game .description');
  //   description.innerHTML = "find the easter egg on this page and click it!";
    
  //   var easterEgg = document.querySelector('section.overview img')
  //   easterEgg.addEventListener('click', function() {
  //     // var displayCountdown = document.querySelector('.game .counter-box');
  //     clickedImage = true;
  //     // displayCountdown.innerHTML = '0';
  //   });

  //   var clickedImage = false;

  //   var counter = 30;
  //   var timeoutId = window.setInterval(timerFunction, 100);

  //   function timerFunction () {
  //     if (clickedImage) {
  //       clearInterval(timeoutId);
  //     } else if (counter >= 0) {
  //       var displayCountdown = document.querySelector('.game .counter-box');
  //       displayCountdown.innerHTML = counter;
  //       counter--;
  //       // console.log(counter);
  //     } else {
  //       clearInterval(timeoutId);
  //     }
  //   }
  // };

}

window.addEventListener('load', main);

