var admin = require("firebase-admin");

var serviceAccount = require("./instadummy-2bf98-firebase-adminsdk-cmw40-6e94357422.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://instadummy-2bf98-default-rtdb.asia-southeast1.firebasedatabase.app"
});


const db = admin.database();
const messaging = admin.messaging();

module.exports = {db, messaging}