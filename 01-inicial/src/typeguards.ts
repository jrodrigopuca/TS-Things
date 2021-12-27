/**
 * Son expresiones que permiten asegurar que la variable es del tipo que 
 * estas esperando en el momento que el código es ejecutado.
 * 
 * Si bien para los tipos simples existen el typeof ó el instance 
 * Para otros tipos se deberá crear una forma personalizada.
 * Esto ocurre cuando al unir dos tipos no se puede determinar de
 * cual tipo correspondía. 
 * - Para este ejemplo se usa a "esBicicleta" para determinar el tipo.
 * - Y se usa el "esTipo" para implementarlo con cualquier tipo
 */

type Bicicleta = {
    mover():void;
}

type Motocicleta = {
    acelerar(): void
    cambiarDireccion: (direccion: string) => void
}

type BiciMoto = Bicicleta | Motocicleta;

// Type guard
const esBicicleta = (bici: any): bici is Bicicleta => 
    (bici as Bicicleta).mover !== undefined;

function revisar(biciMoto:BiciMoto) {
    if (esBicicleta(biciMoto)){
        console.log("es Bicicleta!")
        biciMoto.mover(); 
    }else{
        biciMoto.acelerar();
    }
}

revisar({mover: ()=>{console.log("Wiiiii")}})


// Generic Type Guard
const esTipo = <T>(variable: any, propiedad: keyof T): variable is T =>
    (variable as T)[propiedad] !== undefined;

function revisarGenerico(biciMoto:BiciMoto) {
    if (esTipo<Bicicleta>(biciMoto,'mover')){
        console.log("seguro es Bicicleta!")
        biciMoto.mover(); 
    }else{
        biciMoto.acelerar();
    }
}
revisarGenerico({mover: ()=>{console.log("Wiiiii - parte 2")}})