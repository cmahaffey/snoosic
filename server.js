var express = require('express');
var parser = require('body-parser');
var path = require('path');
var mongo = require('mongodb');
var request = require('request');
var app = express();
var mongoose = require('mongoose')
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.set('port', (process.env.PORT || 3000));
app.listen( app.get('port'), function() {
  console.log('listening... port %s', app.get('port') );
});

app.get('/api/songs', function(req,res){

})

app.use('/', express.static(path.join(__dirname, 'public')));


//new thoughts on this. Capture the reddit api in database. end call.
//render api page as JSON
//new call, capture the spotify IDs.
//either mod our json page with new info OR make new api page, both work.
//on click, now do a socket.io that concats id's into what is currently saved in app.js
mongoose.connect(process.env.MONGOLAB_URI||'mongodb://localhost/snoosic')

var SubRedditSchema = new mongoose.Schema({
  name: {type: String},
  url: {type: String},
  image: {type: String},
  spotifyIDs: {type: String}
})
var Music= new mongoose.Schema('Music',SubRedditSchema)

//OLD MONGODB STUFF
// var client = mongo.MongoClient;
//
// client.connect( ( 'mongodb://localhost:27017/snoosic' ), function(error, db) {


  if(error){ console.log('DB error', error) } else { console.log('connected to Snoosic DB') }


  setInterval(
    function(){
      //list of subreddits
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
      //list of accepted domains for parsing
      var domains = ["youtube.com", "spotify.com", "soundcloud.com", "youtu.be"];
      //loop through subreddits
      for (var i = 0; i < subreddits.length; i++) {

        //self invoking for the for loop
        (function(){
          var subreddit=subreddits[i]
          request("http://www.reddit.com/r/"+subreddit+".json",function(error,response,body){
            if(error || body.split('<')[0]=='html>' ){
              console.log('nope')
            } else {
              var data = JSON.parse(body);

              var results = data.data.children.filter( function( post ){
                return post.data.title !== '' && post.data.title.indexOf('[') !== 0 && domains.indexOf( post.data.domain ) !== -1
              }).map( function( post ) {
                var result = post.data.title;
                result = result.split('[')[0];
                return result;
              });
              console.log(subreddit);
              console.log(results);
              for (var i = 0; i < results.length; i++) {
                //self invoking again
                (function(){
                  var title=results[i];
                  request("https://api.spotify.com/v1/search?q="+title+"&type=track",function(error,response,body){
                    if(error || body.indexOf('<html>') !== -1 ){
                      console.log("ahh, nut bunnies");
                    } else if (!error && response.statusCode == 200){
                      console.log(title);
                      var songInfo = JSON.parse(body);
                      console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
                      if(songInfo.tracks){
                        if (songInfo.tracks.items.length>0) {
                          if(songInfo.tracks.items[0].id){
                            console.log('track id', songInfo.tracks.items[0].id, songInfo.tracks.items[0].album.images[2].url);
                            //need to fix this db thing here i think, also rate limits
                            if(i=0){
                              console.log('adding first song to db playlist '+subreddit, songInfo.tracks.items[0].id, songInfo.tracks.items[0].album.images[2].url);
                              db.collection('tracklists').insert({ playlist: subreddit, img_url: img_url, songs: [ songInfo.tracks.items[0].id ] })
                            } else {
                              console.log('adding another song to playlist '+subreddit, songInfo.tracks.items[0].id);
                              db.collection('tracklists').update(
                                { playlist: subreddit },
                                { $push: { songs: songInfo.tracks.items[0].id }
                              });
                            }

                          }
                        }
                      }else if (body.error) {
                        if (body.error.status===429) {
                          console.log(response.header);
                        }
                      }
                    }
                  });
                })();
              }
            }
          });
        })();
      }


    },30000);
});
