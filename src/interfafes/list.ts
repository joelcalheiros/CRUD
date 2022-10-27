interface iThumbnail {
  path: string;
  extension: string;
}

export default interface iList {
  id: number;
  name: string;
  thumbnail: iThumbnail;
}
