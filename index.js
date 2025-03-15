const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Almacenar datos en memoria
let latestData = null;

// Ruta para recibir datos del ESP8266
app.post('/api/data', (req, res) => {
  latestData = req.body.value; // Guardar el valor recibido
  res.status(200).send('Datos recibidos');
});

// Ruta para obtener los últimos datos
app.get('/api/data', (req, res) => {
  res.status(200).json({ value: latestData });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
