/**
 * Object (conjunto propiedades {})
 */

const jugador = {
  nombre: "Luis Diaz",
  edad: 30,
  equipo: "Liverpool",
  pais: "Inglaterra",
};
/*
const equipo = jugador.equipo;
const pais = jugador.pais;
*/
const { edad, equipo, pais } = jugador;
console.log(equipo);
console.log(pais);
console.log(edad);
/**
 * Array (conjunto elementos [])
 */
const jugadores = ["James", "Falcao", "Luis"];
/*
const jugador1 = jugadores[0];
const jugador3 = jugadores[2];
*/
const [jugador1, , jugador3] = jugadores;
console.log(jugador1);
console.log(jugador3);

let james = 25;
let luis = 27;
[james, luis] = [luis, james];
console.log(james);
console.log(luis);
