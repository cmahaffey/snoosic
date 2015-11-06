var express = require('express');
var parser = require('body-parser');
var path = require('path');
var mongo = require('mongodb');
var request = require('request');
var app = express();

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

request("http://www.reddit.com/r/"+subreddit+".json?limit=100",function(data){



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
});

app.set('port', (process.env.PORT || 3000));
app.listen( app.get('port'), function() {
  console.log('listening... port %s', app.get('port') );
});

app.use('/', express.static(path.join(__dirname, 'public')));

var client = mongo.MongoClient;

client.connect( ( 'mongodb://localhost:27017/snoosic' ), function(error, db) {
  if(error){ console.log(error) } else { console.log('connected to Snoosic DB') }

});
