const express = require('express');
const app = express();

const { buscarPlanetas } = require('./servicos/servicos');

app.get('/planetas', (req, res) => {
    res.json(buscarPlanetas());
});

app.get('/planetas/:id', (req, res) => {
    const id = buscarPlanetasPorId(req.params.id);

    if(id) {
        res.json(id);
    } else if(isNaN(parseInt(req.params.id))) {
        res.status(400).json({'Erro' : 'Requisição inválida!'});
    } else {
        res.status(404).json({'Erro' : 'Nenhum planeta encontrado!'});
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado em ' + data);
});
