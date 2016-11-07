function reproducir() {
	if ($('#reproductor').get(0).paused) {
		$('#reproductor').get(0).play();
	}
}

function parar() {
	$('#reproductor').get(0).pause();
}
if (annyang) {
	var commands = {
		'reproducir': function () {
			reproducir();
		},
		'parar': function () {
			parar();
		},
	};
	annyang.setLanguage('es-MX');
	annyang.addCommands(commands);
	annyang.debug();
	annyang.start({
		continuous: false
	});
}