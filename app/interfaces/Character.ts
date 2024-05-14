export interface Character {
  name      : string;
  eye_color : string;
  gender    : string;
  url       : string;
}

export interface CharacterData {
  character_id : string;
  name        : string;
  eye_color   : string;
  gender      : string;
  image       : string;
}

export interface ResponseData {
  total_characters : number;
  total_pages      : number;
  current_page     : number;
  next_page        : string | null;
  previous_page    : string | null;
  eye_colors       : string[];
  results          : CharacterData[];
}

export interface SwapiResponse {
  count    : number;
  next     : string | null;
  previous : string | null;
  results  : Character[];
}