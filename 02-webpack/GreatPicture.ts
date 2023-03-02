export class GreatPicture {
  alt: string;
  src: string;
  height: number;
  width: number;

  constructor(height: number, width: number, src: string, alt?: string) {
    this.alt = alt || "";
    this.width = width;
    this.height = height;
    this.src = src;
  }

  getDimension() {
    return `${this.height} x ${this.width}`;
  }
}
