var thermostat = new Thermostat();
//print temperature to UI
$(document).ready(function() {
  $('#temperature').text(thermostat.temperature);
});
//add temperature after click and update temerature wievs
$(document).ready(function() {
  $('#temperature-up').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  });
});
//decrase temperature after click and update temerature wievs
$(document).ready(function() {
  $('#temperature-down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  });
});
//reset temperature to 20 deegres after click and show current temperature
$(document).ready(function() {
  $('#temperature-reset').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.temperature);
  });
});
//switch psw off avaible max temperature now is 32 switch status psw to off
$(document).ready(function() {
  $('#powersaving-off').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.switchPowerSavingModeOff();
    $('#power-status').text('off')
  });
});
//switch psw on and reset temperature to defaault 25 as max of the psw mode and update temperature views
$(document).ready(function() {
  $('#powersaving-on').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.switchPowerSavingModeOn();
    thermostat.resetAfterPswOn();
    $('#temperature').text(thermostat.temperature);
    $('#power-status').text('on')
  });
});

$.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
})
