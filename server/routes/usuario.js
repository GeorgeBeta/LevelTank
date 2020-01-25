const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/usuario', (req, res) => {
    res.json({
        Ok: true,
        mensaje: 'Get de usuarios'
    });
});

// POST - La DATA estará en el BODY
app.post('/usuario', (req, res) => {
    let body = req.body;
    if (body.name === undefined) {
        res.status(400).json({
            Ok: false,
            mensaje: 'El usuario no está definido'
        })
    } else {
        res.json({
            Ok: true,
            user: req.body
        });
    }
});

// PUT - Contiene DATA en la URL y ene el BODY
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    res.json({
        Ok: true,
        mensaje: id,
        user: req.body
    });
});

// DELETE - La DATA estará en el BODY
app.delete('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        Ok: true,
        mensaje: `DELETE usuario ${id}`
    });
});

module.exports = app;