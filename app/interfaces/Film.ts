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

export interface CharacterData {
  characterId : string;
  name        : string;
  image       : string;
}

export interface FilmDetails {
  title       : string;
  episode_id  : number;
  director    : string;
  image       : string;
  characters  : CharacterData[];
}

export interface SWAPIFilmResponse {
  results : Film[];
}

export interface SWAPIFilmByIdResponse {
  title      : string;
  episode_id : number;
  director   : string;
  characters : string[];
}

export interface SWAPICharacterResponse {
  name : string;
  url  : string;
}