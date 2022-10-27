interface Thumbnail {
  path: string;
  extension: string;
}

export default interface iList {
  id: number;
  name: string;
  thumbnail: Thumbnail;
}
