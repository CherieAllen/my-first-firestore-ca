import { restaurantsCol } from './connectdb.js'

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