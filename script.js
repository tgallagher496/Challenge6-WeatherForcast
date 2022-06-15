var APIKey = "45be21ec4c6acb1dabb011fa26f9fbd1";
var searchFormEl = document.getElementById("search-form");
var cityEl = document.getElementById("City");
var tempEl = document.getElementById("temp");
var windEl = document.getElementById("wind");
var humidityEl = document.getElementById("humidity");
var uvEl = document.getElementById("uv");

var MondayEl = document.getElementById("Monday");
var temp2El = document.getElementById("temp2");
var wind2El = document.getElementById("wind2");
var humidity2El = document.getElementById("humidity2");

var TuesdayEl = document.getElementById("Tuesday");
var temp3El = document.getElementById("temp3");
var wind3El = document.getElementById("wind3");
var humidity3El = document.getElementById("humidity3");

var WednesdayEl = document.getElementById("Wednesday");
var temp4El = document.getElementById("temp4");
var wind4El = document.getElementById("wind4");
var humidity4El = document.getElementById("humidity4");

var ThursdayEl = document.getElementById("Thursday");
var temp5El = document.getElementById("temp5");
var wind5El = document.getElementById("wind5");
var humidity5El = document.getElementById("humidity5");

var FridayEl = document.getElementById("Friday");
var temp6El = document.getElementById("temp6");
var wind6El = document.getElementById("wind6");
var humidity6El = document.getElementById("humidity6");

var Btn1El = document.getElementById("1");
var Btn2El = document.getElementById("2");
var Btn3El = document.getElementById("3");
var Btn4El = document.getElementById("4");



function getHistory(){
    var ButtonID = this.id;
   console.log(ButtonID);
   var city = document.getElementById(ButtonID).innerHTML;
   console.log(city);
   var storage = [];
  if (localStorage.getItem("citynames") === null) {
    storage[0] = city;
    localStorage.setItem("citynames", JSON.stringify(storage));
    console.log(storage);
  } else {
    storage[0] = city;
    storage = [...storage, ...JSON.parse(localStorage.getItem("citynames"))];
    localStorage.setItem("citynames", JSON.stringify(storage));
    console.log(storage);
  }

  for (var i = 0; i < 4; i++) {
    if (i < storage.length) {
        console.log(i)
      document.getElementById(i + 1).innerHTML = storage[i];
    }
  }

  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=" +
    APIKey;

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var fiveDayURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${APIKey}&units=imperial`;
      fetch(fiveDayURL)
        .then(function (response) {
          return response.json();
        })
        .then(function (fiveData) {
          console.log(fiveData);
          document.getElementById("uv").innerHTML = fiveData.current.uvi;
          var integerUv = parseInt(uvEl.textContent, 10);
          console.log(integerUv);
          if (integerUv <= 2) {
            uvEl.style.background = "green";
          } else if (integerUv <= 7) {
            uvEl.style.background = "orange";
          } else {
            uvEl.style.background = "red";
          }
          var iconImage = document.createElement("img");
          iconImage.setAttribute(
            "src",
            `http://openweathermap.org/img/wn/${fiveData.daily[1].weather[0].icon}@2x.png`
          );

          document.getElementById("Monday").innerHTML = moment()
            .add(1, "days")
            .format("L");
          MondayEl.appendChild(iconImage);
          document.getElementById("temp2").innerHTML =
            fiveData.daily[1].temp.day + " ° F";
          document.getElementById("wind2").innerHTML =
            fiveData.daily[1].wind_speed + " MPH";
          document.getElementById("humidity2").innerHTML =
            fiveData.daily[1].humidity + " %";

          var iconImage2 = document.createElement("img");
          iconImage2.setAttribute(
            "src",
            `http://openweathermap.org/img/wn/${fiveData.daily[2].weather[0].icon}@2x.png`
          );

          document.getElementById("Tuesday").innerHTML = moment()
            .add(2, "days")
            .format("L");
          TuesdayEl.appendChild(iconImage2);
          document.getElementById("temp3").innerHTML =
            fiveData.daily[2].temp.day + " ° F";
          document.getElementById("wind3").innerHTML =
            fiveData.daily[2].wind_speed + " MPH";
          document.getElementById("humidity3").innerHTML =
            fiveData.daily[2].humidity + " %";

          var iconImage3 = document.createElement("img");
          iconImage3.setAttribute(
            "src",
            `http://openweathermap.org/img/wn/${fiveData.daily[3].weather[0].icon}@2x.png`
          );

          document.getElementById("Wednesday").innerHTML = moment()
            .add(3, "days")
            .format("L");
          WednesdayEl.appendChild(iconImage3);
          document.getElementById("temp4").innerHTML =
            fiveData.daily[3].temp.day + " ° F";
          document.getElementById("wind4").innerHTML =
            fiveData.daily[3].wind_speed + " MPH";
          document.getElementById("humidity4").innerHTML =
            fiveData.daily[3].humidity + " %";

          var iconImage4 = document.createElement("img");
          iconImage4.setAttribute(
            "src",
            `http://openweathermap.org/img/wn/${fiveData.daily[4].weather[0].icon}@2x.png`
          );

          document.getElementById("Thursday").innerHTML = moment()
            .add(4, "days")
            .format("L");
          ThursdayEl.appendChild(iconImage4);
          document.getElementById("temp5").innerHTML =
            fiveData.daily[4].temp.day + " ° F";
          document.getElementById("wind5").innerHTML =
            fiveData.daily[4].wind_speed + " MPH";
          document.getElementById("humidity5").innerHTML =
            fiveData.daily[4].humidity + " %";

          var iconImage5 = document.createElement("img");
          iconImage5.setAttribute(
            "src",
            `http://openweathermap.org/img/wn/${fiveData.daily[5].weather[0].icon}@2x.png`
          );

          document.getElementById("Friday").innerHTML = moment()
            .add(5, "days")
            .format("L");
          FridayEl.appendChild(iconImage5);
          document.getElementById("temp6").innerHTML =
            fiveData.daily[5].temp.day + " ° F";
          document.getElementById("wind6").innerHTML =
            fiveData.daily[5].wind_speed + " MPH";
          document.getElementById("humidity6").innerHTML =
            fiveData.daily[5].humidity + " %";
        });
      var iconImage = document.createElement("img");
      iconImage.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      );
      document.getElementById("City").innerHTML =
        data.name + " " + moment().format("L");
      cityEl.appendChild(iconImage);
      document.getElementById("temp").innerHTML = data.main.temp + " ° F";
      document.getElementById("wind").innerHTML = data.wind.speed + " MPH";
      document.getElementById("humidity").innerHTML = data.main.humidity + " %";
    });

}

function getInput(event) {
  event.preventDefault();

  var userInput = document.querySelector("#search-input").value;

  if (!userInput) {
    console.error("You need a search input value");
    return;
  }

  var city = document.getElementById("search-input").value;

  var storage = [];
  if (localStorage.getItem("citynames") === null) {
    storage[0] = city;
    localStorage.setItem("citynames", JSON.stringify(storage));
    console.log(storage);
  } else {
    storage[0] = city;
    storage = [...storage, ...JSON.parse(localStorage.getItem("citynames"))];
    localStorage.setItem("citynames", JSON.stringify(storage));
    console.log(storage);
  }

  for (var i = 0; i < 4; i++) {
    if (i < storage.length) {
        console.log(i)
      document.getElementById(i + 1).innerHTML = storage[i];
    }
  }

  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=" +
    APIKey;

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var fiveDayURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${APIKey}&units=imperial`;
      fetch(fiveDayURL)
        .then(function (response) {
          return response.json();
        })
        .then(function (fiveData) {
          console.log(fiveData);
          document.getElementById("uv").innerHTML = fiveData.current.uvi;
          var integerUv = parseInt(uvEl.textContent, 10);
          console.log(integerUv);
          if (integerUv <= 2) {
            uvEl.style.background = "green";
          } else if (integerUv <= 7) {
            uvEl.style.background = "orange";
          } else {
            uvEl.style.background = "red";
          }
          var iconImage = document.createElement("img");
          iconImage.setAttribute(
            "src",
            `http://openweathermap.org/img/wn/${fiveData.daily[1].weather[0].icon}@2x.png`
          );

          document.getElementById("Monday").innerHTML = moment()
            .add(1, "days")
            .format("L");
          MondayEl.appendChild(iconImage);
          document.getElementById("temp2").innerHTML =
            fiveData.daily[1].temp.day + " ° F";
          document.getElementById("wind2").innerHTML =
            fiveData.daily[1].wind_speed + " MPH";
          document.getElementById("humidity2").innerHTML =
            fiveData.daily[1].humidity + " %";

          var iconImage2 = document.createElement("img");
          iconImage2.setAttribute(
            "src",
            `http://openweathermap.org/img/wn/${fiveData.daily[2].weather[0].icon}@2x.png`
          );

          document.getElementById("Tuesday").innerHTML = moment()
            .add(2, "days")
            .format("L");
          TuesdayEl.appendChild(iconImage2);
          document.getElementById("temp3").innerHTML =
            fiveData.daily[2].temp.day + " ° F";
          document.getElementById("wind3").innerHTML =
            fiveData.daily[2].wind_speed + " MPH";
          document.getElementById("humidity3").innerHTML =
            fiveData.daily[2].humidity + " %";

          var iconImage3 = document.createElement("img");
          iconImage3.setAttribute(
            "src",
            `http://openweathermap.org/img/wn/${fiveData.daily[3].weather[0].icon}@2x.png`
          );

          document.getElementById("Wednesday").innerHTML = moment()
            .add(3, "days")
            .format("L");
          WednesdayEl.appendChild(iconImage3);
          document.getElementById("temp4").innerHTML =
            fiveData.daily[3].temp.day + " ° F";
          document.getElementById("wind4").innerHTML =
            fiveData.daily[3].wind_speed + " MPH";
          document.getElementById("humidity4").innerHTML =
            fiveData.daily[3].humidity + " %";

          var iconImage4 = document.createElement("img");
          iconImage4.setAttribute(
            "src",
            `http://openweathermap.org/img/wn/${fiveData.daily[4].weather[0].icon}@2x.png`
          );

          document.getElementById("Thursday").innerHTML = moment()
            .add(4, "days")
            .format("L");
          ThursdayEl.appendChild(iconImage4);
          document.getElementById("temp5").innerHTML =
            fiveData.daily[4].temp.day + " ° F";
          document.getElementById("wind5").innerHTML =
            fiveData.daily[4].wind_speed + " MPH";
          document.getElementById("humidity5").innerHTML =
            fiveData.daily[4].humidity + " %";

          var iconImage5 = document.createElement("img");
          iconImage5.setAttribute(
            "src",
            `http://openweathermap.org/img/wn/${fiveData.daily[5].weather[0].icon}@2x.png`
          );

          document.getElementById("Friday").innerHTML = moment()
            .add(5, "days")
            .format("L");
          FridayEl.appendChild(iconImage5);
          document.getElementById("temp6").innerHTML =
            fiveData.daily[5].temp.day + " ° F";
          document.getElementById("wind6").innerHTML =
            fiveData.daily[5].wind_speed + " MPH";
          document.getElementById("humidity6").innerHTML =
            fiveData.daily[5].humidity + " %";
        });
      var iconImage = document.createElement("img");
      iconImage.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      );
      document.getElementById("City").innerHTML =
        data.name + " " + moment().format("L");
      cityEl.appendChild(iconImage);
      document.getElementById("temp").innerHTML = data.main.temp + " ° F";
      document.getElementById("wind").innerHTML = data.wind.speed + " MPH";
      document.getElementById("humidity").innerHTML = data.main.humidity + " %";
    });
}


searchFormEl.addEventListener("submit", getInput);

Btn1El.addEventListener("click", getHistory);
Btn2El.addEventListener("click", getHistory);
Btn3El.addEventListener("click", getHistory);
Btn4El.addEventListener("click", getHistory);
