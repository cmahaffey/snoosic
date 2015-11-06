var express = require('express');
var parser = require('body-parser');
var path = require('path');
var mongo = require('mongodb');
var app = express();

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.set('port', (process.env.PORT || 3000));
app.listen( app.get('port'), function() {
  console.log('listening... port %s', app.get('port') );
});

app.use('/', express.static(path.join(__dirname, 'public')));

var client = mongo.MongoClient;

client.connect( ( 'mongodb://localhost:27017/snoosic' ), function(error, db) {
  if(error){ console.log(error) } else { console.log('connected to Snoosic DB') }

});
