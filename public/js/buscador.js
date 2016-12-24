var templateSource = document.getElementById('resultados-template').innerHTML,
	template = Handlebars.compile(templateSource),
	resultadosPlaceholder = document.getElementById('resultados'),
	playingCssClass = 'playing',
	audioObject = null;
var fetchTracks = function (albumId, callback) {
	$.ajax({
		url: 'https://api.spotify.com/v1/albums/' + albumId,
		success: function (response) {
			callback(response);
		}
	});
};
var searchAlbums = function (query) {
	$.ajax({
		url: 'https://api.spotify.com/v1/search',
		data: {
			q: query,
			type: 'album'
		},
		success: function (response) {
			resultadosPlaceholder.innerHTML = template(response);
		}
	});
};
resultados.addEventListener('click', function (e) {
	var target = e.target;
	if (target !== null && target.classList.contains('cover')) {
		if (target.classList.contains(playingCssClass)) {
			audioObject.pause();
		} else {
			if (audioObject) {
				audioObject.pause();
			}
			fetchTracks(target.getAttribute('data-album-id'), function (data) {
				audioObject = new Audio(data.tracks.items[0].preview_url);
				audioObject.play();
				target.classList.add(playingCssClass);
				audioObject.addEventListener('ended', function () {
					target.classList.remove(playingCssClass);
				});
				audioObject.addEventListener('pause', function () {
					target.classList.remove(playingCssClass);
				});
			});
		}
	}
});
document.getElementById('buscar').addEventListener('click', function (e) {
	e.preventDefault();
	searchAlbums(document.getElementById('query').value);
	document.getElementById('query').value = "";
}, false);
document.getElementById('search-form').addEventListener('submit', function (e) {
	e.preventDefault();
	searchAlbums(document.getElementById('query').value);
	document.getElementById('query').value = "";
}, false);


(function () {
	var audio = new Audio();

	function searchTracks(query) {
		$.ajax({
			url: 'https://api.spotify.com/v1/search',
			data: {
				q: query,
				type: 'track'
			},
			success: function (response) {
				if (response.tracks.items.length) {
					var track = response.tracks.items[0];
					audio.src = track.preview_url;
					audio.play();
					communicateAction('<div>Playing ' + track.name + ' by ' + track.artists[0].name + '</div><img width="150" src="' + track.album.images[1].url + '">');
				}
			}
		});
	}

	function playSong(songName, artistName) {
		var query = songName;
		if (artistName) {
			query += ' artist:' + artistName;
		}
		searchTracks(query);
	}

	function communicateAction(text) {
		var rec = document.getElementById('conversation');
		rec.innerHTML += '<div class="action">' + text + '</div>';
	}

	function recognized(text) {
		var rec = document.getElementById('conversation');
		rec.innerHTML += '<div class="recognized"><div>' + text + '</div></div>';
	}
})();