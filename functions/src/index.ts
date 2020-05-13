import * as functions from 'firebase-functions';
import * as admin  from 'firebase-admin';
import * as express from 'express';

// const serviceAccount = require('../../../private/adminAccount');

const app = express();

admin.initializeApp({
    // credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://handbook-cc5cb.firebaseio.com'
});


const settings = {timestampsInSnapShots: true};
const firestore = admin.firestore();
firestore.settings(settings);

// async function _checkUser(): Promise<void> {
//     const auth = admin.auth();
//     const user = await auth.getUserByEmail('gdai006@mail.ru').then((_user) => {
//         return _user;
//     });
//     console.log(user)
// }
//
// _checkUser();
//
// firestore
//     .collection('test')
//     .add({
//         'word': 'hello'
//     })
//     .then(() => console.log('success!'),
//     (err) => console.log(err))



app.get('/time', async (request:unknown, response: typeof express.response) => {
    const nowDate: Date = new Date();
    let user= {};
    await admin.auth()
        .getUserByEmail('gdai006@mail.ru')
        .then(function(userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log('Successfully fetched user data:', userRecord.toJSON());
            user = userRecord;
        })
        .catch(function(error) {
            console.log('Error fetching user data:', error);
        });
    response.send({'date': nowDate, 'user': user});

})

const getTime = functions.https.onRequest(app);

export {
    getTime as app
}
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
