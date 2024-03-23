const { planetas } = require('../dados/dados');

function buscarPlanetas() {
    return planetas;
};

function buscarPlanetasPorNome(nomePlaneta) {
    return planetas.filter((planeta) => planeta.nome.toLowerCase().includes(nomePlaneta.toLowerCase()));
};

function buscarPlanetasPorId(id) {
    let idPlanetas = parseInt(id);
    let idPlaneta = planetas.find(planeta => planeta.id === idPlanetas);

    return idPlaneta;
};

exports.buscarPlanetas = buscarPlanetas;
exports.buscarPlanetasPorNome =buscarPlanetasPorNome;
exports.buscarPlanetasPorId = buscarPlanetasPorId;
