export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };

export type DataCharacters = {
  characters: {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }[],
}

export type DataEpisodes = {
  episodes: {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
  }[]
}