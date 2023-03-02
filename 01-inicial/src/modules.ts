import { GreatAlbum, GreatPicture } from "./class";

const littlePicture: GreatPicture = new GreatPicture(
  12,
  "little Picture",
  120,
  120,
  "lpicture.png",
  "png",
  "picture"
);
const littleAlbum: GreatAlbum = new GreatAlbum(
  1,
  "Photos",
  "Photos",
  "Little Album"
);

littleAlbum.addPicture(littlePicture);
