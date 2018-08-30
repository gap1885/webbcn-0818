'use strict';


function main() {

  var navButton = document.getElementById('nav-button');

  navButton.addEventListener('click', function (event) {
    var h3 = event.currentTarget;
    var nav = h3.parentNode;
    nav.classList.toggle('hidden');
  });


  var nodes = document.querySelectorAll('article.card h3');
  
  for (var ix = 0; ix < nodes.length; ix++) {
    nodes[ix].addEventListener('click', function (event) {
      var h3 = event.currentTarget;
      var article = h3.parentNode;
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

    var searchResults = document.querySelector('.quick-nav .search-results');
    document.body.addEventListener('click', function() {
      searchResults.innerHTML = '';
    })

    document.addEventListener('keyup', function(e) {
      if (e.keyCode == 27) { 
        searchResults.innerHTML = '';
      }
    });

    input.addEventListener('click', function(event) {
      event.stopPropagation();
    });



    input.addEventListener('focus', handleChange);


    console.log(results);
  }


  // ----------------------------------------
  // ----------- GAME COUNTDOWN -------------
  // ----------------------------------------



  // function countDown(i) {
  //   var int = setInterval(function () {
  //       console.log(i);
  //       document.querySelector('.game .counter-box').innerHTML = i;
  //       i-- || clearInterval(int);  //if i is 0, then stop the interval
  //   }, 1000);
  // }
  // countDown(30);

  var playButton = document.querySelector('.game .button');
  
  playButton.addEventListener('click', countDown);

  function countDown(counter) {
    playButton.removeEventListener('click', countDown);

    var description = document.querySelector('.game .description');
    description.innerHTML = "find the easter egg on this page and click it!";
    
    var easterEgg = document.querySelector('section.overview img')
    easterEgg.addEventListener('click', function() {
      // var displayCountdown = document.querySelector('.game .counter-box');
      clickedImage = true;
      // displayCountdown.innerHTML = '0';
    });

    var clickedImage = false;

    var counter = 30;
    var timeoutId = window.setInterval(function(){
      if (clickedImage) {
        clearInterval(timeoutId);
      } else if (counter >= 0) {
        var displayCountdown = document.querySelector('.game .counter-box');
        displayCountdown.innerHTML = counter;
        counter--;
        // console.log(counter);
      } else {
        clearInterval(timeoutId);
      };
    }, 100);
  };

}

window.addEventListener('load', main);

