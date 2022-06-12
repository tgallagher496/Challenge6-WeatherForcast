var searchFormEl = document.querySelector('#search-form');

function getInput(){

    event.preventDefault();

    var userInput = document.querySelector('#search-input').value;

    if(!userInput){
        console.error('You need a search input value');
        return;
    }

    //var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;
    console.log(userInput);
}

searchFormEl.addEventListener('submit', getInput);

