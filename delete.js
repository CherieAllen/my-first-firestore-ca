// Created restaurant ZaHqrFqDxzyOe2fPUCzh
// Created restaurant h1D06jshSvCZYGu5a2xA

import admin from "firebase-admin"; // imports firebase library

import serviceAccount from './credentials.js'; // import our credentials to connect to firebase

admin.initializeApp({ //connects to our firebase project 
  credential: admin.credential.cert(serviceAccount) // creating a certificate from our credentials
});

// Now we are connect to our Firebase project & related services

const db = admin.firestore(); // creates a short to access the Firestore database

const restaurantsCol = db.collection('restaurants'); // creates

// delete
restaurantsCol.doc('ZaHqrFqDxzyOe2fPUCzh').delete()
    .then(res => console.log('ZaHqrFqDxzyOe2fPUCzh'))
    .catch(err => console.log('ZaHqrFqDxzyOe2fPUCzh',err))

restaurantsCol.doc('h1D06jshSvCZYGu5a2xA').delete()
.then(res => console.log('h1D06jshSvCZYGu5a2xA'))
.catch(err => console.log('h1D06jshSvCZYGu5a2xA:',err))
