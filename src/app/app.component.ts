import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    
  // Web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDqS5ez4rGQb73KW3eNBp4yvInSHCh3oWE",
    authDomain: "avalanche-scco.firebaseapp.com",
    databaseURL: "https://avalanche-scco.firebaseio.com",
    projectId: "avalanche-scco",
    storageBucket: "avalanche-scco.appspot.com",
    messagingSenderId: "578050584114",
    appId: "1:578050584114:web:be937132975fcc967c162b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  }
  title = 'avalanche-scco';
}
