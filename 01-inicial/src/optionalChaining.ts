/**
 * Optional Chaining
 * Nos sirve para propiedades que pueden ser nulas
 * ó no definidas, se implementa agregando el ? a la propiedad
 * ej: picture_9089.author?.name
 */

import { Picture } from "./interfaces";

const picture_9089: Picture = {
  id: "9089",
  source: "/c/9080.png",
  height: 90,
  width: 120,
  loading: "lazy",
  description: "9089",
};

console.log(picture_9089.author?.name ? "hay un autor" : "no hay autor");
/**
 * Nullish Coallesing
 * Es una forma más simple para determinar si algo es nulo
 * - si no es nulo, devuelve la propiedad
 * - si es nulo va a la segunda parte de la sentencia
 */
console.log(picture_9089.author ?? "Autor no encontrado");
