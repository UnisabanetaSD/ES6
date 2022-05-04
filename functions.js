/**
 * Function Declarative
 */

function calcular(valor) {
  return valor * 100;
}
const resp = calcular(5000);
console.log(resp);

/**
 * Function Expression
 */

const operacion = function (valor) {
  return valor * 100;
};

const resp2 = operacion(5000);
console.log(resp2);

const jugador = {
  nombre: "Messi",
  saludar: function (equipo = "Barcelona") {
    return `Messi juega en ${equipo}`;
  },
};
console.log(jugador.saludar("PSG"));
