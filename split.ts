let texto: string = "manzana,banana,pera,naranja";

// Usar el método split para dividir la cadena por la coma
let frutas: string[] = texto.split(",");

console.log("Array de frutas:", frutas);

for (let fruta of frutas) {
    console.log(fruta);
}