export class Persona { // Clase Persona
    // Propiedades privadas
    private nombre: string;
    private edad: number;
    private ciudad: string;

    // Constructor para inicializar la clase
    constructor(nombre: string, edad: number, ciudad: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(edad: number): void {
        if (edad > 0) {
            this.edad = edad;
        } else {
            console.log("La edad debe ser un número positivo.");
        }
    }

    public getCiudad(): string {
        return this.ciudad;
    }

    public setCiudad(ciudad: string): void {
        this.ciudad = ciudad;
    }
}
