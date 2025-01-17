interface Movie {
  id: number
  title: string
  genre: string[]
  poster: string | null
  releaseDate: string
  rating: number
}

interface Genre {
  id: number
  name: string
}

interface APIMovie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[]; 
  id: number;
  original_language:string;
  original_title:  string; 
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface APIResponse {
  page: number
  results: APIResponse[]
  total_pages: number
  total_results: number
}
