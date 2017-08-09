$(document).ready(function() {
  $.simpleWeather({
    location: 'San Francisco, CA',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<p>Currently '+weather.temp+'&deg;'+weather.units.temp+' in San Francisco, CA</p>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
