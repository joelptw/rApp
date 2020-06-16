var admin = require("firebase-admin");

var serviceAccount = require("../react-dev-connector-firebase-adminsdk-r5a8u-0e89b8103e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-dev-connector.firebaseio.com"
});

module.exports = admin;
