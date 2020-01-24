const express = require('express');

const app = express();

app.get('/usuario', (req, res) => {
    res.json({
        Ok: true,
        mensaje: 'Get de usuarios'
    });
});

app.post('/usuario', (req, res) => {
    res.json({
        Ok: true,
        mensaje: 'POST de usuario'
    });
});

app.put('/usuario', (req, res) => {
    res.json({
        Ok: true,
        mensaje: 'PUT de usuario'
    });
});

app.delete('/usuario', (req, res) => {
    res.json({
        Ok: true,
        mensaje: 'DELETE de usuario'
    });
});

module.exports = app;