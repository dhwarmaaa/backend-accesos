const express = require('express');
const { leerDatosDesdeJSON} = require('./baseDatos')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/api/TieneAcceso/:id', (req, res) => {
  const id = req.params.id;

  const datos = leerDatosDesdeJSON(id)
    res.send(datos);
   
   
});
/*
app.get('/api/TieneAcceso/:id', (req, res) => {
    const id = req.params.id;
  
    leerDatosDesdeFirebase(id)
      .then(datos => {
        res.send(datos);
      })
      .catch(error => {
        res.status(500).send('Error al leer los datos desde Firebase');
      });
  });
*/
app.listen(port, () => {
  console.log(`Servidor web escuchando en el puerto ${port}`);
});
