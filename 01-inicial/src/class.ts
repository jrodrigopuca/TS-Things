/**
 * clases:
 * - herencia: extends
 * - abstract: (base de otras clases, puede implementar funciones), no se puede instanciar.
 * propiedades:
 * - públicas: se puede acceder directamente
 * - privadas: solo son accedidas dentro de la clase, se definen con private
 * - protegidas: como privado pero con acceso desde clases heredadas
 * - solo lectura: readonly
 * - static: propiedad/evento visible a nivel clase
 *
 *
 */
abstract class GreatItem {
  protected _id: number;
  protected _title: string;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }
}
type extensionType = "jpg" | "png" | "gif";

export class GreatPicture extends GreatItem {
  alt: string;
  src: string;
  height: number;
  width: number;
  extension: extensionType;
  static availableExtensions: extensionType[] = ["jpg", "png", "gif"];

  constructor(
    id: number,
    title: string,
    height: number,
    width: number,
    src: string,
    extension: extensionType,
    alt?: string
  ) {
    super(id, title);
    this.alt = alt || "";
    this.width = width;
    this.height = height;
    this.src = src;
    this.extension = extension;
  }

  getDimension() {
    return `${this.height} x ${this.width}`;
  }
}

export class GreatAlbum extends GreatItem {
  name: string;
  private _pictures: GreatPicture[] = [];
  private _description: string;

  constructor(id: number, title: string, name: string, description: string) {
    super(id, title);
    this._description = description;
    this.name = name;
  }

  addPicture(picture: GreatPicture) {
    this._pictures.push(picture);
  }

  set description(description: string) {
    this._description = description;
  }

  get description() {
    return this._description;
  }
}

// Creando las instancias a las clases
const album: GreatAlbum = new GreatAlbum(
  12,
  "Gallery",
  "Gallery 12",
  "Good Album"
);
const photo: GreatPicture = new GreatPicture(
  312,
  "Pic",
  180,
  180,
  "./photo-312.png",
  "png"
);
album.addPicture(photo);

// Accediendo a propiedades públicas
album.name = "My Gallery # 12";
// Accediendo a propiedades privadas
album.description = "Cool photos";
// Accediendo a static
// console.log(GreatPicture.availableExtensions); //['jpg', 'png', 'gif'];
