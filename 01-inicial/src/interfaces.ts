/**
 * Las interfaces nos permiten crear nuestras propias estructuras
 * para propiedad opcionales usamos '?'
 * para unión de propiedades usamos '|' 
 * para herencia usamos extends
 * para solo lectura usamos readonly (no permite una segunda asignación)
 * para decirle que no es nulo usamos '!'
 */

export interface Media {
    readonly id: string,
    source: string
}

export interface Author {
    name: string
}
export interface Picture extends Media {
    alt?: string,
    height: number,
    loading: 'eager' | 'lazy',
    width: number,
    description: string | null,
    author?: Author
}

let myPicture: Picture = {
    id: 'myPicture',
    source: '../img/hola.jpg',
    loading: 'lazy',
    width: 1,
    height: 1,
    description: 'amazing picture'
}

const description = myPicture.description!;
console.log('description: ',description)