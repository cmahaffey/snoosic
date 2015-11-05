console.log("running");
// var domain=data.data.children[0].data.domain;
// var title = data.data.children[0].data.title
$.getJSON("http://www.reddit.com/r/music.json",function(data){

  console.log(data.data.children[0].data.title);

});
