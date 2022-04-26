/**
 * Object = conjunto de propiedades (clave : valor) representa {}
 */

const persona = {
  nombre: "Pedro",
  apellidos: "Mejia",
  estado: true,
  edad: 40,
};
console.log(persona.nombre);
persona.cedula = 3945455;
console.log(persona);
persona.edad = 30;
console.log(persona);

/**
 * Array = conjunto de elementos (posiciones) representa []
 */
const teams = ["Nacional", "Medellin", true];
teams.push("Envigado");
console.log(teams);
console.log(teams[0]);
console.log(teams[3]);

const test = [
  [1, 2, 3],
  ["a", "b", "c"],
];
const array1 = test[0];
console.log(array1[0]);
const array2 = test[1];
console.log(array2[1]);
