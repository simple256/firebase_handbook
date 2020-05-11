import * as functions from 'firebase-functions';
import * as express from 'express';

const app = express();

app.get('/time', (request:unknown, response: typeof express.response) => {
    const nowDate: Date = new Date();
    response.send({'date': nowDate});
})

const getTime = functions.https.onRequest(app);

export {
    getTime as app
}
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript