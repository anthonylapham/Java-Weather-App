$(document).ready(function() {
  //var button = document.querySelector('#submitButton');
 // var inputValue = document.querySelector('#inputValue').value;
  var apiID = config.API_ID;
  //var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&units=imperial&appid=" + apiID;



$('#submitButton').click(function(){
	var inputValue = document.querySelector('#inputValue').value;
	var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&units=imperial&appid=" + apiID;
	
	  $.getJSON(apiURL, function(data) {
      console.log(data);
	  var iconcode = data.weather[0].icon;
      //var iconurl = "http://openweathermap.org/img/w" + "n/" + iconcode + "@2x.png";
      var iconurl = "https://openweathermap.org/img/wn/" + iconcode + "@2x.png";
      document.getElementById('weather').innerHTML = data['weather'][0]['description'];
      //document.getElementById('geo').innerHTML = "latitude: " + data.current_observation.display_location.latitude + " longitude: " + data.current_observation.display_location.longitude;
      document.getElementById('temp').innerHTML = data.main.temp;
      document.getElementById('city').innerHTML = data.name;
      document.getElementById('country').innerHTML = data.sys.country;
      //$('#wicon').attr('src', iconurl);
      document.getElementById('wicon').src= iconurl;

	 //Need to figure out how to change background based on weather data

      if(data.weather.description == "clear sky"){
		document.body.style.backgroundColor = rgb(135, 203, 222);
		} else if(data.weather.description === 'overcast clouds'){
			document.body.style.backgroundColor = rgb(182, 182, 180);
		}else if(data.weather.description === "broken clouds"){
			document.body.style.backgroundColor = rgb(245,245,245);
		}else if(data.weather.description === "light snow"){
			document.body.style.backgroundColor = rgb(255,250,250);
		}else if(data.weather.description === 'few clouds'){
			document.body.style.backgroundColor = rgb(253, 234, 199);
		}


	 
  });

	
});

	

});