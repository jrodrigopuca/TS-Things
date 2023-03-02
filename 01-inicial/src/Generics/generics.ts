/**
 * Generics
 * Brinda la posibilidad de enviar distintos tipos como componentes
 * - Para este caso SimpleArray solamente funciona con array de números
 * - Con GenericArray se pude obtener lo mismo pero con cualquier tipo
 */

class SimpleArray {
  constructor(private collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}
const oSimpleArray = new SimpleArray([1, 2, 3]);
console.log(oSimpleArray.get(2)); //3

class GenericArray<T> {
  constructor(private collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const oGenericArray = new GenericArray<string>(["1", "2", "3"]);
console.log(oGenericArray.get(2)); //"3"

const hola = () => {
  return "Hola";
};
