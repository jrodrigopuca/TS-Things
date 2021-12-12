/**
 * Las interfaces nos permiten crear nuestras propias estructuras
 * para propiedad opciones usamos '?'
 * para herencia usamos extends
 * para solo lectura usamos readonly (no permite una segunda asignación)
 */

interface Media {
    readonly id: string,
    source: string
}

interface Picture extends Media {
    alt?: string,
    height: number,
    loading: 'eager' | 'lazy',
    width: number
}

let myPicture: Picture = {
    id: 'myPicture',
    source: '../img/hola.jpg',
    loading: 'lazy',
    width: 1,
    height: 1
}