interface Thumbnail {
  extension: string;
  path: string;
}

interface Movie {
  id: number;
  name: string;
  thumbnail: Thumbnail;
}

export default Movie;
