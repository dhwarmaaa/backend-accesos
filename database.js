const admin = require('./firebaseConfig');

function leerDatosDesdeFirebase(id) {
    var ref = admin.database().ref("/Accesos");
    return ref
      .orderByChild("personCode")
      .equalTo(id)
      .once("value")
      .then(snapshot => {
        const datos = snapshot.val();
        if (datos) {
            console.log(datos)
          const personCode = Object.keys(datos)[0]; // Obtiene la clave del objeto
          const estatus = datos[personCode].estatus; // Accede al campo status
          return estatus === true ? true : false;
        } else {
          return null; // Si no se encuentra el personCode, devuelve null
        }
      })
      .catch(error => {
        console.error('Error al leer datos desde Firebase:', error);
        throw error;
    });
}

module.exports = {
  leerDatosDesdeFirebase
};
