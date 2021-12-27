// númericos
let numeros: number = 1.2;
let hex: number = 0x3f51b5;
let binary: number = 0b10;
let octal: number = 0o753;

//boolean
let bool: boolean = true;

//string
let st: string = "texto";
let expresion = `aquí va el ${st}`;

/*
Any: 
- Capturar valores dinámicos
- No se sabe el tipo exacto de la variable
- los valores pueden cambiar con el tiempo: apis externas, librerías de terceros
*/

let idUser: any = 1;
idUser = "1u";

/*
Void:
- Es el opuesto a any, representa la ausencia de tipo
- tipo de retorno en funciones por defecto
- null/undefined son subtipos para void
*/

function showRandom(max: number): void {
    console.log(Math.floor(Math.random() * max));
}

showRandom(100);

/*
Never:
- Representa el tipo de valor que nunca ocurre
- funciones que nunca retornan un valor
*/

function handleError(message: string): never {
    throw new Error(message);
}

/* Null y Undefined
- ambos valores tienen sus respectivos tipos
- se pueden asumir como subtipos de los otros tipos de datos (pero es mejor no asignarlo)
*/
let nullVariable: null = null;
let undefinedVariable: undefined = undefined;
let otherVariable: any = "Something";
otherVariable = null;
otherVariable = undefined;

/*
object: tipo para valores no primitivos, no es posible acceder a los valores de las propiedades
Object: instancia de la clase Object de JS
*/
let user: object = {
    id: 1,
    name: "Juan",
}; //console.log(user.id) ERROR

let myUser = {
    id: 1,
    name: "Juan",
}; // console.log(myUser.id); // 1

let instance = myUser instanceof Object;

//Array: se puede definir como: tipo[], Array<tipo>
let numbers: number[] = [1, 2, 3];
let texts: Array<string> = ["Texto1", "Texto2"];

//Tuplas: array de elementos que están tipados
let player: [number, string];
player = [1, "PlayerOne"]; // console.log(players[1]) //'PlayerOne'

let otherPlayer: [number, string, boolean] = [2, "Player 2", false];
let players: [number, string][] = [
    [1, "goalkeeper"],
    [2, "defense"],
];

/*
    Enum: conjunto de constantes de un mismo tipo
    - se van asignado automáticamente a sus valores
    - son flexibles

    console.log(move) //0
    console.log(Arrow[2]) //"Left"
*/
enum Arrow {
    Up, //0
    Down, //1
    Left, //2
    Right, //3
}
const move: Arrow = Arrow.Up;

enum OtherArrow {
    Up = 19, //19
    Down = 90, //90
    Left, //91
    Right, //92
}

enum OtherOtherArrow {
    Up = "w",
    Down = "s",
    Left = "a",
    Right = "d",
}

// Unión de tipos "|"
let idPlayer: number | string;
idPlayer = 23901;
idPlayer = "#23901";

/**
 * Alias ó Unión:
 * - nuevo nombre para un tipo
 * - se puede aplicar también a un conjunto o combinación de tipos
 * - se puede discriminar el tipo (ver union.ts)
 */

type typePlayer = number | string;
let newIdPlayer: typePlayer;

/**
 * Intersección: combinación de 2 types o más, se representa con el "&"
 */

type Health = {
    id_player: number;
    points: number;
    lastUpdate: Date;
};

type HealthPack = {
    restorePoints: number;
    lastUpdate: Date;
};

type UpdateHealth = Health & HealthPack;
const moment_20221216: UpdateHealth = {
    id_player: 1331312,
    points: 90,
    restorePoints: 10,
    lastUpdate: new Date(),
};

/**
 * Tipos literales
 * - puede contener únicamente una cadena del conjunto
 */
type boxes = "100x100" | "200x200" | "500x500";
let myBox: boxes = "100x100";

/**
 * Aserciones de tipo: cambiar al tipo que nosotros asumimos
 * - se puede usar con 'as' ó con <tipo>Variable
 * - no se debe confundir con el casting
 */
const myText = document.getElementById("text") as HTMLInputElement;
const otherText = <HTMLInputElement>document.getElementById("text");