
import admin from "firebase-admin"; // imports firebase library

import serviceAccount from './credentials.js'; // import our credentials to connect to firebase

admin.initializeApp({ //connects to our firebase project 
  credential: admin.credential.cert(serviceAccount) // creating a certificate from our credentials
});

// Now we are connect to our Firebase project & related services

const db = admin.firestore(); // creates a short to access the Firestore database

const restaurantsCol = db.collection('restaurants'); // creates a shortcut to access the restaurants collection

const restaurants = {
    name: 'Mister 01',
    address: '555 N Federal Hwy #5, Boca Raton, FL 333432',
    cuisine: 'Pizza',
    rating: 4.9,
    phone: '(789) 677-2903',
} // creating an object -- in this case a specific restaurant we want to add to our database

restaurantsCol.add(restaurants) // adding restaurants to our restaurants collection
.then(doc => console.log ('Created restaurant', doc.id)) // Handle resolve
.catch(err => console.error(err)) //Handle catch / reject
const restaurant2 = {
    name : 'Bolay',
    address: '7060 W Palmetto Park Rd, Boca Raton, FL 33433',
    cuisine: 'American',
    rating: 4.6,
}

async function addRestaurant(data){
   try{ 
    const doc = await restaurantsCol.add(data) // add restaurant to collection
    console.log ('Created restaurant', doc.id) // Handle resolve
   } catch(err) {
       console.error(err) // Handle reject
   }

}
addRestaurant(restaurant2);
