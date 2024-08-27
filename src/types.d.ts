export interface Movie {
  title: string
  year: string
  poster: string
  id: string
}

export interface ApiMovies {
  Title: string
  Year: string
  Poster: string
  imdbID: string
}

export interface ApiResponse {
  Search: ApiMovies[]
  totalResults: string
  Response: string
}
