/**
 * Functions
 * - parámetros tipados
 * - parámetros opcionales (?)
 * - se puede definir el tipo de retorno
 */

type ImageSize = "100x100" | "500x500";

const createSprite = (
    src: string,
    size?: ImageSize,
    x?: number,
    y?: number
): object => ({
    src,
    size,
    x,
    y,
});

const spriteOne = createSprite("./complete.jpg", "100x100", 2, 3);
const spriteTwo = createSprite("./optional.jpg");
