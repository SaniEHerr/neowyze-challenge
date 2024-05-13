export interface Films {
  films : Film[];
}

export interface Film {
  title      : string;
  episode_id : number;
  film_id    : string;
  image      : string;
  url?       : string;
}

export interface SWAPIResponse {
  results : Film[];
}