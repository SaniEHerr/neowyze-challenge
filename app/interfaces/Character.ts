export interface Character {
  name      : string;
  eye_color : string;
  gender    : string;
  url       : string;
}

export interface CharacterData {
  character_id : string;
  name         : string;
  eye_color    : string;
  gender       : string;
  image        : string;
}

export interface ResponseData {
  total_characters : number;
  total_pages      : number;
  current_page     : number;
  next_page        : string | null;
  previous_page    : string | null;
  eye_colors       : string[];
  genders          : string[];
  results          : CharacterData[];
}

export interface SwapiResponse {
  count    : number;
  next     : string | null;
  previous : string | null;
  results  : Character[];
}


export interface CharacterDetailData {
  name       : string;
  eye_color  : string;
  hair_color : string;
  skin_color : string;
  birth_year : string;
  height     : string;
  mass       : string;
  url        : string;
}

export interface CharacterDetails {
  characterId : string;
  name        : string;
  birth_year  : string;
  height      : string;
  mass        : string;
  eye_color   : string;
  hair_color  : string;
  skin_color  : string;
  image       : string;
}