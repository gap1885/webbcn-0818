'use strict';

function main() {


//-----EXPERIMENTS----//

  var nodes1 = document.querySelectorAll('.list-articles h4');
  for (var ix = 0; ix < nodes1.length; ix++) {
    nodes1[ix].addEventListener('click', function (event) {
      var h4 = event.currentTarget;
      var article = h4.parentNode;
      var content = article.querySelector('div');
      content.classList.toggle('hide');
    });
  };


//-----BUTTON-----//

  var mainButton = document.querySelector('.site-nav .button');
    mainButton.addEventListener('mouseover', function (event) {
      event.target.classList.toggle('button-inverted');
    });
    mainButton.addEventListener('mouseout', function (event) {
      event.target.classList.toggle('button-inverted');
    });

  var secondaryButton = document.querySelectorAll('.list-articles a');
  for (var ix = 0; ix < secondaryButton.length; ix++) {
    secondaryButton[ix].addEventListener('mouseover', function (event) {
      event.target.classList.toggle('button-inverted');
    });
    secondaryButton[ix].addEventListener('mouseout', function (event) {
      event.target.classList.toggle('button-inverted');
    });
  };


//----DROP DOWN MENU----//

  function findStudents(term){
    var results = [];
    if (term){
      results = students.filter(function (item){;
        var name = item.name.toUpperCase();
        if (name.indexOf(term) !== -1){
          return true;
        }; 
      });
    };
    return results;
  };

  function displayResults(results){
    searchResult.innerHTML = '';
    var ul = document.createElement('ul');
    results.forEach(function (student) {
      var link = document.createElement('a');
      link.innerText = student.name;
      link.setAttribute('href', '../' + student.url);
      var li = document.createElement('li');
      li.appendChild(link);
      ul.appendChild(li);
    });
    searchResult.appendChild(ul);
  };

  function handleChange (){
    var searchTerms = input.value.toUpperCase();
    var results = findStudents(searchTerms);
    displayResults(results);
  };

  var input = document.querySelector('.input-student input');
  input.addEventListener('keyup', handleChange);

  var searchResult = document.querySelector('.search-results'); 
  document.body.addEventListener('click', function (){
    searchResult.innerHTML = ''
  });

  document.querySelector('.input-student input').addEventListener('click', function (event){
    event.stopPropagation(event);
  });

  document.body.addEventListener('keyup', function (){
    if (event.key === 'Escape') {
      searchResult.innerHTML = '' 
    };
  });

  document.querySelector('.input-student input').addEventListener('focus', handleChange);




//-----TIMER-----//

  var time = 30;
  var p = document.createElement('p');
  p.classList.add('button');
  p.classList.add('timer');
  p.innerText = time;
  document.querySelector('.main-image').appendChild(p);
  var timerId = setInterval(function () {
      time -- ;
      if (time === 0){
        clearInterval(timerId);
      };
      p.innerText = time;
      document.querySelector('.timer').addEventListener('click', function (){
        clearInterval(timerId); 
    });
  }, 1000);
};




window.addEventListener('load', main);
