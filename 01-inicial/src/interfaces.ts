/**
 * Las interfaces nos permiten crear nuestras propias estructuras
 * para propiedad opcionales usamos '?'
 * para unión de propiedades usamos '|'
 * para herencia usamos extends
 * para solo lectura usamos readonly (no permite una segunda asignación)
 * para decirle que no es nulo usamos '!'
 */

export interface Media {
  readonly id: string;
  source: string;
}

export interface Author {
  name: string;
}
export interface Picture extends Media {
  alt?: string;
  height: number;
  loading: "eager" | "lazy";
  width: number;
  description: string | null;
  author?: Author;
}

let myPicture: Picture = {
  id: "myPicture",
  source: "../img/hola.jpg",
  loading: "lazy",
  width: 1,
  height: 1,
  description: "amazing picture",
};

const description = myPicture.description!;
console.log("description: ", description);

// Usar interface en clase

interface Position {
  getX(): number;
  getY(): number;
}

class Resource implements Position {
  protected _x: number;
  protected _y: number;
  constructor() {
    this._x = 0;
    this._y = 0;
  }

  show(): void {
    console.log("Mostrar recurso");
  }
  getX(): number {
    return this._x;
  }

  getY(): number {
    return this._y;
  }
}
