
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

const restaurant2 = {
    name : 'Bolay',
    address: '7060 W Palmetto Park Rd, Boca Raton, FL 33433',
    cuisine: 'American',
    rating: 4.6,
}

async function addRestaurant(data){
   try{ 
    const doc = await db.collection('restaurants').add(data)
    console.log ('Created restaurant', doc.id)
   } catch(err) {
       console.error(err)
   }
}
addRestaurant(restaurant2);
