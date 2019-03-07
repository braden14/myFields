//
// Kansas State University Extension Platform
// myFields Reporter Application
// Copyright Kansas State University 2019 All Rights Reserved
//


import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// configured with new firebase "Extension Platform"
var config = {
  apiKey: "AIzaSyBZ69Qv-GYW76xMNH1RnzgYk5tkStjMCKI",
    authDomain: "extension-database-81ebc.firebaseapp.com",
    databaseURL: "https://extension-database-81ebc.firebaseio.com",
    projectId: "extension-database-81ebc",
    storageBucket: "extension-database-81ebc.appspot.com",
    messagingSenderId: "702370054240"
};
firebase.initializeApp(config);


firebase.firestore().enablePersistence()
  .then(function() {
      // Initialize Cloud Firestore through firebase
      var db = firebase.firestore();
  })
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });


window.firebase



ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
