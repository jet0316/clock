$(document).on('ready', function() {
  


	var outerShell = $('<div class="outer-shell"></div>')
	var innerShell = $('<div class="inner-shell"></div>')
	var leftAM = $('<div class="left-AM">AM</div>')
	var leftPM = $('<div class="left-PM">PM</div>')
	var clockScreen = $('<div class="clock-screen"></div>')
	var indicatorLight = $('<div class="indicator"</div>')
	var clockNumbers = $('<div class="clock-numbers"></div>')
	var AMfrequencies = $('<div class="AM-frequencies">AM    53 60 70 80 100 130 170    x10kHz</div>')
	var FMfrequencies = $('<div class="FM-frequencies">FM    88 92 96 100 104    MHz</div>')
	var clockAuto =$('<div class="auto">AUTO</div>')

	$('div').append(outerShell)
	$(outerShell).append(innerShell)
	$(innerShell).append(clockScreen)
	$(clockScreen).append(clockNumbers)
	$(innerShell).append(leftAM)
	$(innerShell).append(leftPM)
	$(clockScreen).append(indicatorLight)
	$(innerShell).append(clockAuto)
	$(innerShell).append(FMfrequencies)
	$(innerShell).append(AMfrequencies)


	setInterval(function() {
        var now = new Date();
        clockNumbers.text(now.toLocaleTimeString().slice(0, 4));
    }, 1000);

});