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
      searchResults.innerHTML = '';
      var results = findStudents(searchTerms);
      
      displayResults(results)
      
    };


    var searchResults =  document.querySelector('.sub-header .search-results');
    
    document.body.addEventListener('click', function() {
      searchResults.innerHTML = '';
    });

    input.addEventListener('keyup', function(event) {
      if (event.key === 'Escape') {
        searchResults.innerHTML = '';
      }
    });

    input.addEventListener('click', function(event) {
      event.stopPropagation(event);
    });

    input.addEventListener('focus', handleChange);




// ------- TIMER
    
    if (window.confirm("Do you want to play? You have to guess what is my favorite interest in 10 seconds! Are you readyyyyy?? Attention: you have only one chance")) {
      
      // ---- margin for student quick jump

      var addMargin = document.querySelector('.sub-header');
      addMargin.classList.add('add-margin');
      

      // ---- timer starts

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
          location.href='https://i.giphy.com/media/Ix5Pk3cUofTLW/giphy.webp';
        }
        spanTimer.innerText = timeLeft;
      }, 1000);

      timer.appendChild(spanTimer);
      }

      // ---- game

      var wrongAnswer = document.querySelectorAll('.wrong-answer');
      for (var ix = 0; ix < wrongAnswer.length; ix++) {
          wrongAnswer[ix].addEventListener('click', function(event) {
          clearInterval(intervalId);
          window.confirm('Nope, I\'m sorry');
          location.href='https://i.giphy.com/media/Ix5Pk3cUofTLW/giphy.webp';
        });
      }

      var rightAnswer = document.querySelector('.right-answer');
      rightAnswer.addEventListener('click', function(event) {
        clearInterval(intervalId);
        window.confirm('Hey, you\'re damn right!!');
        location.href='https://i.giphy.com/media/3oFzmkkwfOGlzZ0gxi/giphy.webp';
      });





  };

  window.addEventListener('load', main);