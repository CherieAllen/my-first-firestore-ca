import admin from "firebase-admin"; // imports firebase library

import serviceAccount from './credentials.js'; // import our credentials to connect to firebase

admin.initializeApp({ //connects to our firebase project 
  credential: admin.credential.cert(serviceAccount) // creating a certificate from our credentials
});

// Now we are connect to our Firebase project & related services

const db = admin.firestore(); // creates a short to access the Firestore database

const restaurantsCol = db.collection('restaurants');

// restaurantsCol.get() // This is saying get all the restaurants
//     .then(snapshot => {
//         snapshot.docs.forEach(doc => console.log(doc.data())) 
//     })
//     .catch(console.error)

    restaurantsCol
    // .where('name','==','Bolay')
    .where('rating','>=',4.5)
    .get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => console.log(doc.data())) 
             })
        .catch(console.error)