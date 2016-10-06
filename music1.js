var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",                    //object in an object in an object
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
// loop over each playlist
  for (var playlistId in library.playlists) {
    var playlistName = library.playlists[playlistId].name;
    var numTracks = library.playlists[playlistId].tracks.length;
    console.log(playlistId + ": " + playlistName + " - " + numTracks + " tracks");
  }
};
printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var trackId in library.tracks) {
    var trackName = library.tracks[trackId].name;
    var trackArtist = library.tracks[trackId].artist;
    var trackAlbum = library.tracks[trackId].album;
    console.log(trackId + ": " + trackName + " " + "by " + trackArtist + " (" + trackAlbum + ")");
  }
};
printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var playlist = library.playlists[playlistId];
  var tracks = playlist.tracks;
  console.log(playlistId + ": " + playlist.name + " - " + tracks.length + " tracks");
    for (var track in tracks) {
      var trackId = tracks[track];
      var trackName = library.tracks[trackId].name;
      var trackArtist = library.tracks[trackId].artist;
      var trackAlbum = library.tracks[trackId].album;
      console.log(trackId + ": " + trackName + " " + "by " + trackArtist + " (" + trackAlbum + ")");
  }


};
printPlaylist('p01');


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var selectedTrack = library.tracks[trackId].id;
  var selectedPlaylist = library.playlists[playlistId];
  var tracksInPlaylist = selectedPlaylist.tracks;
  tracksInPlaylist.push(selectedTrack);
  console.log(tracksInPlaylist);

};
addTrackToPlaylist('t01', 'p02');

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

// adds a track to the library
var addTrack = function (name, artist, album) {
  var uniqueId = uid();
  var newTrack = {
    id: uniqueId,
    name: name,
    artist: artist,
    album: album
  };

  library.tracks[uniqueId] = newTrack;


};
addTrack('Adam', 'Adam', 'Adam');
console.log(library.tracks);


// adds a playlist to the library

var addPlaylist = function (name) {
  var uniqueId = uid();
  var newPlaylist = {
    id: uniqueId,
    name: name,
    tracks: []
  };

  library.playlists[uniqueId] = newPlaylist;
};
addPlaylist('Chill Jazz');
console.log(library.playlists);



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

};




