
const admin = require("firebase-admin");

const serviceAccount = require('./credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const restaurants = {
    name: 'Mister 01',
    address: '555 N Federal Hwy #5, Boca Raton, FL 333432',
    cuisine: 'Pizza',
    rating: 4.9,
    phone: '(789) 677-2903',
}

db.collection('restaurants').add(restaurants)
.then(doc => console.log ('Created restaurant', doc.id))
.catch(err => console.error(err))