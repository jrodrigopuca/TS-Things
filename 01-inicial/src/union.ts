/**
 * Discriminar el tipo
 * Se puede hacer poniendo una misma propiedad con distinto valor en los tipos
 * de ese modo se asegura la diferencia
 */

interface GameAudio {
    type: 'audio';
    src: string;
    duration: number;
}
interface GameImage {
    type: 'image';
    src: string;
    description: string;
}

type GameAsset = GameAudio | GameImage;

function showAsset(asset:GameAsset) {
    switch (asset.type) {
        case 'audio':
            console.log(`Este audio tiene una duración de ${asset.duration} seg`)
            break;
        case 'image':
            console.log(`Esta imagen es sobre ${asset.description}`)
            break;
        default:
            break;
    }
}

showAsset({type:'audio',src:'/c/audio.mp4', duration:120});