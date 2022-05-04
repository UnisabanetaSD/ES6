/**
 * Operator Rest(Recibir ...)
 */
function calcularDeuda(nombre, ...deudas) {
  let total = 0;
  deudas.forEach((deuda) => (total += deuda));
  return `La persona ${nombre} debe ${total}`;
}
console.log(calcularDeuda("Ana", 10, 20, 30, 40, 50, 60, 100));
/**
 * Operator Spread(Enviar ...)
 */
const deudaInicial = 500;
const deudas = [10, 20, 30, 40, 50, 60];
const deudaTotal = [deudaInicial, ...deudas];
console.log(deudaTotal);
console.log(calcularDeuda("Pedro", ...deudaTotal));
//console.log(calcularDeuda("Pedro", 500, 10, 20, 30, 40, 50, 60));
