function sumar(a: number, b: number): number { //función para sumar dos números a y b
    return a + b;
}
console.log(sumar(5, 3));
console.log(sumar(10, 20));
console.log(sumar(-1, 6));

function esPar(num: number): boolean { //función para verificar si un número es par
    return num % 2 === 0;
}
console.log(esPar(4));
console.log(esPar(7));
console.log(esPar(10));

function concatenar(texto1: string, texto2: string): string { //función para concatenar dos strings
    return texto1 + " " + texto2;
}
console.log(concatenar("Hola", "Mundo")); 