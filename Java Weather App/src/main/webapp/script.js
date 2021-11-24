$(document).ready(function() {
  var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Dayton&units=imperial&appid=aabc79365145ee6586ad7e1960f6fd3f";

  $.getJSON(apiURL, function(data) {
      console.log(data);
      document.getElementById('weather').innerHTML = data.weather.description;
      //document.getElementById('geo').innerHTML = "latitude: " + data.current_observation.display_location.latitude + " longitude: " + data.current_observation.display_location.longitude;
      document.getElementById('temp').innerHTML = data.main.temp;
      document.getElementById('city').innerHTML = data.name;
      document.getElementById('country').innerHTML = data.sys.country;
      document.getElementById('icon').src= data.weather.icon;
  });

});