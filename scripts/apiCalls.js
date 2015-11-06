console.log("running");

var subreddit = "music";
var domains = ["youtube.com", "spotify.com", "soundcloud.com", "youtu.be"];

$.getJSON("http://www.reddit.com/r/"+subreddit+".json?limit=100",function(data){

  var results = data.data.children.filter( function( post ){
    return domains.indexOf( post.data.domain ) !== -1
  }).map( function( post ) {
    var result = post.data.title;
    result = result.split(' [')[0];
    // result = result.split('{')[0]; // if we want to remove other bracketed items
    // result = result.split('(')[0];
    return result;
  });

  console.log( results );

});
