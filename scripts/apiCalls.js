console.log("running");


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
  ]
subreddit="music"
var domains = ["youtube.com", "spotify.com", "soundcloud.com", "youtu.be"];

// function redditCall(subreddit, acceptedDomains){
function getmestuff(){
  $.getJSON("http://www.reddit.com/r/"+subreddit+".json?limit=100",function(data){



        var results = data.data.children.filter( function( post ){
          return domains.indexOf( post.data.domain ) !== -1
        }).map( function( post ) {
          var result = post.data.title;
          result = result.split(' [')[0];

          return result;
        });

        console.log( results );
        return results
      });
}
// }

function spotifyCall(results, subreddit){
  for (var i = 0; i < results.length; i++) {
    $.getJSON("https://api.spotify.com/v1/search?q="+results[i]+"&type=track",function(data){
      console.log(data);
    }

  );
  }
}
