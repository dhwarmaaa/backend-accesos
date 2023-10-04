const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json'); // Reemplaza por la ruta correcta al archivo JSON de las credenciales

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://web-service-48531-default-rtdb.firebaseio.com/' // Reemplaza por la URL de tu base de datos
});

module.exports = admin;
