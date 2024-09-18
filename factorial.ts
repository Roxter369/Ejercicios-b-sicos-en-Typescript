// Función recursiva para calcular el factorial de un número
function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let nume: number = 5;
let resultado: number = factorial(nume);
console.log("El factorial de", nume, "es:", resultado);
