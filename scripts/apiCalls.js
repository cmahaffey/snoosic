console.log("running");
// var domain=data.data.children[0].data.domain;
$.getJSON("http://www.reddit.com/r/music.json",function(data){console.log(data.data.children[0].data);});
