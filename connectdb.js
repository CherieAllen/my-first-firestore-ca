import admin from "firebase-admin"; // imports firebase library
import serviceAccount from './credentials.js'; // import our credentials to connect to firebase

admin.initializeApp({ //connects to our firebase project 
  credential: admin.credential.cert(serviceAccount) // creating a certificate from our credentials
});
 
const db = admin.firestore(); // creates a short to access the Firestore database
export const restaurantsCol = db.collection('restaurants'); // 

