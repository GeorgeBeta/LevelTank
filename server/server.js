const express = require('express');

require('./config/config');

const app = express();
app.use(require('./routes/usuario'));

app.get('/', (req, res) => {
    res.json({
        Ok: true,
        mensaje: 'Consulta el GET de la aplicación'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto', process.env.PORT);
});