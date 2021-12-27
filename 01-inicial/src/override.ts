/**
 * Override: sobrecarga
 * - primero deben ir las definiciones y luego una única implementación
 * - la función debe tener el mismo nombre pero diferentes tipos de parametros
 * y valor de retono
 * - El número de parametros debe ser el mismo (a menos que se usen opcionales)
 */

function mover(velocidad: number): string;
function mover(velocidad: string, esContinuo: boolean): string;
function mover(velocidad: any, esContinuo?: boolean): string {
    return typeof velocidad === "number"
        ? `desplazando a ${velocidad} km/s`
        : `el objeto se mueve ${esContinuo ? "continuamente" : ""} a ${velocidad}`;
}

console.log(mover(12));
console.log(mover("10 km/h", true));
