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

    // ------- quick jump

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
      event.stopPropagation()
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


    var searchResults =  document.querySelector('.sub-header .search-results');
    
    document.body.addEventListener('click', function() {
      searchResults.innerHTML = '';
    });

    document.body.addEventListener('keyup', function() {
      if (e.which == 27) {
        searchResults.innerHTML = '';
      }
    });

    input.addEventListener('click', function(event) {
      event.stopPropagation(event);
    });

    input.addEventListener('focus', handleChange);

    

    // ------- timer

    // var timer = document.querySelector('.timer');

    // var spanTimer = document.createElement('span');

    // var timeLeft = 30;
    // spanTimer.innerText = timeLeft;

    // console.log(timeLeft);
    // var intervalId = setInterval(function() {
    //   if (timeLeft) {
    //     timeLeft--;
    //     console.log(timeLeft)
    //   } else {
    //     clearInterval(intervalId);
    //   }
    //   spanTimer.innerText = timeLeft;
    // }, 1000);

    // timer.appendChild(spanTimer);

    
    if (window.confirm("Do you want to play? You have to guess what is my favorite interest in 10 seconds! Are you readyyyyy??")) { 
      var timer = document.querySelector('.timer');

      var spanTimer = document.createElement('span');

      var timeLeft = 10;
      spanTimer.innerText = timeLeft;

      console.log(timeLeft);
      var intervalId = setInterval(function() {
        if (timeLeft) {
          timeLeft--;
          console.log(timeLeft)
        } else {
          clearInterval(intervalId);
          location.href='https://media.giphy.com/media/Ix5Pk3cUofTLW/giphy.gif';
        }
        spanTimer.innerText = timeLeft;
      }, 1000);

      timer.appendChild(spanTimer);
      }

      var rightAnswer = document.querySelector('.right-answer');
      rightAnswer.addEventListener('click', function(event) {
        clearInterval(intervalId);
        window.confirm('Hey, you\'re damn right!!');
        location.href='https://media.giphy.com/media/3oFzmkkwfOGlzZ0gxi/giphy.gif';
      });




  };

  window.addEventListener('load', main);