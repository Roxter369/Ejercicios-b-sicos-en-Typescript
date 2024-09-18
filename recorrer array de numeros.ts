let numeros: number[] = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
    console.log("Número en la posición ", i, ":", numeros[i]);
}

let suma: number = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log("La suma de todos los números es:", suma);
