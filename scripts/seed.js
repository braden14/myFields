const firebase = require('firebase');
const fs = require('fs');
require("firebase/firestore");

var config = {
  apiKey: "AIzaSyBZ69Qv-GYW76xMNH1RnzgYk5tkStjMCKI",
    authDomain: "extension-database-81ebc.firebaseapp.com",
    databaseURL: "https://extension-database-81ebc.firebaseio.com",
    projectId: "extension-database-81ebc",
    storageBucket: "extension-database-81ebc.appspot.com",
    messagingSenderId: "702370054240"
};
firebase.initializeApp(config);
var db = firebase.firestore();

var csv = require('node-csv').createParser();

function keyify(value) {
    return value.toLowerCase().replace(/\s+/g, '-')
}

fs.readFile('./scripts/seeds/pests.csv', 'utf-8', function(err, data) {
    if(err) return console.error(err);

    var lines = data.split('\r')

    for(var i = 0; i < lines.length; i++) {
        var pest = lines[i].split(',');
        // 0 pest type 1 crop type 2 name
        firebase.database().ref('/crops').child(keyify(pest[1])).child(keyify(pest[0])).child(keyify(pest[2])).set({name: pest[2]});
    }

});
