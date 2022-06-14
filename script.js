var APIKey = "45be21ec4c6acb1dabb011fa26f9fbd1";
var searchFormEl = document.getElementById('search-form');
var cityEl = document.getElementById('City');

function getInput(){

    event.preventDefault();

    var userInput = document.querySelector('#search-input').value;

    if(!userInput){
        console.error('You need a search input value');
        return;
    }

    var city = document.getElementById("search-input").value;
    console.log(city);
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;

    fetch(queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        console.log(data.main.temp)
        document.getElementById('City').innerHTML = data.name;

    });


}

searchFormEl.addEventListener('submit', getInput);




