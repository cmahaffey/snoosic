console.log("running");

var subreddit = "music"; // to be assigned by user selection
var domains = ["youtube.com", "spotify.com", "soundcloud.com", "youtu.be"];

$.getJSON("http://www.reddit.com/r/"+subreddit+".json?limit=100",function(data){

  var results = data.data.children.filter( function( post ){
    return domains.indexOf( post.data.domain ) !== -1 // filters results from selected domains
  }).map( function( post ) {
    var result = post.data.title; // we're only looking at the title string
    result = result.split('[')[0]; // removes reddit-conventional [genre]
    // result = result.split('{')[0]; // if we want to remove other bracketed items
    // result = result.split('(')[0];
    return result;
  });

  console.log( results );

});
