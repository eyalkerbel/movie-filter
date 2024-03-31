export interface Video {
  id: number;
  artist: string;
  title: string;
  genre_id: number;
  image_url: string;
  release_year: number;
}

export interface Genre {
  id: number;
  name: string;
}
