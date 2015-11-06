var express = require('express');
var parser = require('body-parser');
var path = require('path');
var mongo = require('mongodb');
var request = require('request');
var app = express();

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

var subreddits = [
  "indiefolk",
  "Music",
  "ListenToThis",
  "Indie",
  "wereonspotify",
  "indie_rock",
  "electronicmusic",
  "treemusic",
  "DubStep",
  "PostRock",
  "Jazz",
  "HipHopHeads"
];
var domains = ["youtube.com", "spotify.com", "soundcloud.com", "youtu.be"];
// setInterval(
  // function(subreddit,domains){
    var subreddit="Music";
    var domains = ["youtube.com", "spotify.com", "soundcloud.com", "youtu.be"];
    request("http://www.reddit.com/r/"+subreddit+".json?limit=100",function(error,response,body){

          var data=JSON.parse(body);

          var results = data.data.children.filter( function( post ){
            return domains.indexOf( post.data.domain ) !== -1
          }).map( function( post ) {
            var result = post.data.title;
            result = result.split(' [')[0];

            return result;
          });

          for (var i = 0; i < results.length; i++) {

            request("https://api.spotify.com/v1/search?q="+results[i]+"&type=track",function(error,response,body){

              var songInfo=JSON.parse(body);
              if(songInfo.tracks.items[0]){
                console.log(songInfo.tracks.items[0].id);
                // console.log(songInfo.tracks.items[0].album.images[2]); //height 300 add a .url if needbe. this is a hash with height, width and url
                //find(subreddit), and push into the DATABASES array
              }

            });
          }
          // console.log(results);
        // return results
      });
  // },6000);





app.set('port', (process.env.PORT || 3000));
app.listen( app.get('port'), function() {
  console.log('listening... port %s', app.get('port') );
});

app.use('/', express.static(path.join(__dirname, 'public')));

var client = mongo.MongoClient;

client.connect( ( 'mongodb://localhost:27017/snoosic' ), function(error, db) {
  if(error){ console.log(error) } else { console.log('connected to Snoosic DB') }
});
