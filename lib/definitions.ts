export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };

export type Characters = {
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
  }[]
}