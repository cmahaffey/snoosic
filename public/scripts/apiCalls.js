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
// =======
//   var results = data.data.children.filter( function( post ){
//     return domains.indexOf( post.data.domain ) !== -1 // filters results from selected domains
//   }).map( function( post ) {
//     var result = post.data.title; // we're only looking at the title string
//     result = result.split('[')[0]; // removes reddit-conventional [genre]
//     // result = result.split('{')[0]; // if we want to remove other bracketed items
//     // result = result.split('(')[0];
//     return result;
//   });
// >>>>>>> 9e603902953e0560d2e2891419b168501114c121:public/scripts/apiCalls.js

function spotifyCall(results, subreddit){
  for (var i = 0; i < results.length; i++) {
    $.getJSON("https://api.spotify.com/v1/search?q="+results[i]+"&type=track",function(data){
      console.log(data);
    }

  );
  }
}
