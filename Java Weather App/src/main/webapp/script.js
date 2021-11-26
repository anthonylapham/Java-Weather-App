$(document).ready(function() {
  var button = document.querySelector('#submitButton');
  var inputValue = document.querySelector('#inputValue');
  var apiID = config.API_ID;
  var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&units=imperial&appid=" + apiID;



$('#submitButton').click(function(){
	  $.getJSON(apiURL, function(data) {
      console.log(data);
      document.getElementById('weather').innerHTML = data.weather.description;
      //document.getElementById('geo').innerHTML = "latitude: " + data.current_observation.display_location.latitude + " longitude: " + data.current_observation.display_location.longitude;
      document.getElementById('temp').innerHTML = data[main][0][temp];
      document.getElementById('city').innerHTML = data.name;
      document.getElementById('country').innerHTML = data.sys.country;
      document.getElementById('icon').src= data.weather.icon;
  });
});

	

});