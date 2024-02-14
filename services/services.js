const { planetas } = require('../dados/dados');

function buscarPlanetas() {
    return planetas;
}

function buscarPlanetasPorId(id) {
    let idPlanetas = parseInt(id);
    let idPlaneta = planetas.find(planeta => planeta.id === idPlanetas);

    return idPlaneta;
}

exports.buscarPlanetas = buscarPlanetas;
exports.buscarPlanetasPorId = buscarPlanetasPorId;
