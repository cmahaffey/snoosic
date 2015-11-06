var express = require('express');
var parser = require('body-parser');
var path = require('path');
// var mongo = require('mongodb');
// var request = require('request');
var app = express();

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.set('port', (process.env.PORT || 3000));
app.listen( app.get('port'), function() {
  console.log('listening... port %s', app.get('port') );
});

app.use('/', express.static(path.join(__dirname, 'public')));

// var client = mongo.MongoClient;

// var subreddits = [
//   "indiefolk",
//   "Music",
//   "ListenToThis",
//   "Indie",
//   "wereonspotify",
//   "indie_rock",
//   "electronicmusic",
//   "treemusic",
//   "DubStep",
//   "PostRock",
//   "Jazz",
//   "HipHopHeads"
// ];

// client.connect( ( 'mongodb://localhost:27017/snoosic' ), function(error, db) {
//   if(error){ console.log('DB error', error) } else { console.log('connected to Snoosic DB') }

// client.connect( ( 'mongodb://localhost:27017/snoosic' ), function(error, db) {
//   if(error){ console.log('DB error', error) } else { console.log('connected to Snoosic DB') }
//
//   // setInterval(
//     // function(){
//     console.log('clearing playlists');
//     db.collection('tracklists').remove({});
//
//     // for(var j=0; j<subreddits.length;j++){
//     var createPlaylist = function(subreddit){
//
//       var domains = ["youtube.com", "spotify.com", "soundcloud.com", "youtu.be"];
//       request("http://www.reddit.com/r/"+subreddit+".json",function(error,response,body){
//         if(error || body.indexOf('<html>') !== -1 ){
//           console.log('nope')
//         } else {
//           var data = JSON.parse(body);
//
//           var results = data.data.children.filter( function( post ){
//             return post.data.title !== '' && post.data.title.indexOf('[') !== 0 && domains.indexOf( post.data.domain ) !== -1
//           }).map( function( post ) {
//             var result = post.data.title;
//             result = result.split('[')[0];
//             return result;
//           });
//           console.log(results);
//
//           for (var i = 0; i < results.length-1; i++) {
//             console.log("i is", i);
//
//             request("https://api.spotify.com/v1/search?q="+results[i]+"&type=track",function(error,response,body){
//               if(error || body.indexOf('<html>') !== -1 ){
//                 console.log("ahh, nuttbunnies");
//               } else {
//                 var songInfo = JSON.parse(body);
//                 if(songInfo.tracks){
//                   if(songInfo.tracks.items[0].id){
//                     console.log('track id', songInfo.tracks.items[0].id, songInfo.tracks.items[0].album.images[2].url);
//                     if(i=0){
//                       console.log('adding first song to db playlist '+subreddit, songInfo.tracks.items[0].id, songInfo.tracks.items[0].album.images[2].url);
//                       db.collection('tracklists').insert({ playlist: subreddit, img_url: img_url, songs: [ songInfo.tracks.items[0].id ] })
//                     } else {
//                       console.log('adding another song to playlist '+subreddit, songInfo.tracks.items[0].id);
//                       db.collection('tracklists').update(
//                         { playlist: subreddit },
//                         { $push: { songs: songInfo.tracks.items[0].id }
//                       });
//                     }
//                   }
//                 }
//               }
//             });
//           }
//         }
//       });
//     }
//     createPlaylist( "music" );
// // },6000);
// });
