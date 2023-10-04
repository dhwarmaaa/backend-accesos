const fs = require('fs');

function leerDatosDesdeJSON(id) {
  // Lee el contenido del archivo JSON
  const contenido = fs.readFileSync('./web_service.json', 'utf8');
  const datos = JSON.parse(contenido);
   // console.log(datos)
  if (datos && datos.Accesos) {
    // Busca el objeto con el campo personCode igual a 'id'
    const persona = Object.values(datos.Accesos).find(
      persona => persona.personCode === id
    );

    if (persona) {
      const estatus = persona.estatus;
      return estatus;
    } else {
      return null; // Si no se encuentra el personCode, devuelve null
    }
  } else {
    return null; // Si no hay datos o no existe la propiedad Accesos, devuelve null
  }
}

module.exports = {
  leerDatosDesdeJSON
};
