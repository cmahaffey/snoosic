console.log("running");
// var domain=data.data.children[0].data.domain;
// var title = data.data.children[0].data.title
$.getJSON("http://www.reddit.com/r/music.json",function(data){
  for (var i = 0; i < data.data.children.length; i++) {
    if data.data.children[i].data.domain==="youtube.com"
  }
  console.log(data.data.children[0].data.title);

});
