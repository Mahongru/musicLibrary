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
  },
  printPlaylists: function () {
      for (var playlistId in this.playlists) {
      var playlistName = this.playlists[playlistId].name;
      var numTracks = this.playlists[playlistId].tracks.length;
      console.log(playlistId + ": " + playlistName + " - " + numTracks + " tracks");
      };
  },
  printTracks: function () {
      for (var trackId in this.tracks) {
      var trackName = this.tracks[trackId].name;
      var trackArtist = this.tracks[trackId].artist;
      var trackAlbum = this.tracks[trackId].album;
      console.log(trackId + ": " + trackName + " " + "by " + trackArtist + " (" + trackAlbum + ")");
      };
  },

  printPlaylist: function (playlistId) {
      var playlist = this.playlists[playlistId];
      var tracks = playlist.tracks;
      console.log(playlistId + ": " + playlist.name + " - " + tracks.length + " tracks");
      for (var track in tracks) {
      var trackId = tracks[track];
      var trackName = this.tracks[trackId].name;
      var trackArtist = this.tracks[trackId].artist;
      var trackAlbum = this.tracks[trackId].album;
      console.log(trackId + ": " + trackName + " " + "by " + trackArtist + " (" + trackAlbum + ")");
      };
  },

  addTrackToPlaylist: function (trackId, playlistId) {
      var selectedTrack = this.tracks[trackId].id;
      var selectedPlaylist = this.playlists[playlistId];
      var tracksInPlaylist = selectedPlaylist.tracks;
      tracksInPlaylist.push(selectedTrack);
      console.log(tracksInPlaylist);
  },

  addTrack: function (name, artist, album) {
      var uniqueId = uid();
      var newTrack = {
            id: uniqueId,
            name: name,
            artist: artist,
            album: album
          };

      this.tracks[uniqueId] = newTrack;
  },


  addPlaylist: function (name) {
      var uniqueId = uid();
      var newPlaylist = {
          id: uniqueId,
          name: name,
          tracks: []
      };
      this.playlists[uniqueId] = newPlaylist;
  },
};

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};



library.addPlaylist('Chill Jazz');
console.log(library.playlists);






