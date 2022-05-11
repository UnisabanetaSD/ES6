let teams = ["Nacional", "Medellin", "Envigado"];

for (let i = 0; i < teams.length; i++) {
  console.log(teams[i]);
}

teams.forEach((team) => {
  console.log(team);
});

/**push - shift - pop son mutables */
console.log(teams);
teams.push("Rionegro");
console.log(teams);
let primerItem = teams.shift();
console.log(primerItem);
console.log(teams);
let ultimoItem = teams.pop();
console.log(ultimoItem);
console.log(teams);

/**Map - Find - Some - Every - Filter - Reduce   Inmutables */

const ligaBetPlay = [
  { equipo: "Nacional", ciudad: "Medellin", campeonatos: 16, libertadores: 2 },
  { equipo: "Medellin", ciudad: "Medellin", campeonatos: 8, libertadores: 0 },
  { equipo: "Millonarios", ciudad: "Bogota", campeonatos: 15, libertadores: 0 },
  { equipo: "Santa Fe", ciudad: "Bogota", campeonatos: 8, libertadores: 0 },
  { equipo: "OnceCaldas", ciudad: "Manizale", campeonatos: 5, libertadores: 1 },
  { equipo: "America", ciudad: "Cali", campeonatos: 14, libertadores: 0 },
];
// Map = Extraer informacion (Iterar)
const nombresEquiposMap = ligaBetPlay.map((team) => team.equipo);
console.log(nombresEquiposMap);

const ciudadEquiposMap = ligaBetPlay.map((team) => team.ciudad);
console.log(ciudadEquiposMap);

//Find para buscar solo la primera coincidencia
const equiposBogota = ligaBetPlay.find((team) => team.ciudad === "Bogota");
console.log(equiposBogota);

// Every todos cumplen una condicion (Boolean)
const todosLibertadores = ligaBetPlay.every((team) => team.libertadores > 0);
console.log(todosLibertadores);

// Some alguno cumple una condicion (Boolean)
const algunoLibertadores = ligaBetPlay.some((team) => team.libertadores > 0);
console.log(algunoLibertadores);

//Filter Filtrar
const nomEquiBogota = ligaBetPlay
  .filter((team) => team.ciudad === "Bogota")
  .map((team) => team.equipo);
console.log(nomEquiBogota);

const nomEquiposLibertadores = ligaBetPlay
  .filter((team) => team.libertadores > 0)
  .map((team) => team.equipo);
console.log(nomEquiposLibertadores);
