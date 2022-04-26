/**
 * Explicar Var
 */
function explicarVar() {
  var edad = 10;
  edad = 20;
  if (true) {
    var edad = 30;
    console.log(edad);
  }
  console.log(edad);
}
explicarVar();

/**
 * Explicar Let
 */
function explicarLet() {
  let edad = 10;
  edad = 20;
  if (true) {
    let edad = 30;
    console.log(edad);
  }
  console.log(edad);
}
explicarLet();

/**
 * Explicar Const
 */
function explicarConst() {
  const edad = 10;
  //edad = 20;
  if (true) {
    const edad = 30;
    console.log(edad);
  }
  console.log(edad);
  const array = ["Ana", "Laura"];
  console.log(array);
  array.push("Pepito");
  console.log(array);
}
explicarConst();
