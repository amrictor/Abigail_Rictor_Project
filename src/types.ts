export interface MovieType {
  _id: string, // Unique identifier
  name: string, // Movie Title
  runtimeInMinutes: number,
  budgetInMillions: number,
  boxOfficeRevenueInMillions: number,
  academyAwardNominations: number,
  academyAwardWins: number,
  rottenTomatoesScore: number
};

export interface CharacterType {
  _id: string, // Unique identifier
  name: string, // Character name
  height: string,
  race: string,
  gender: string,
  birth: string,
  spouse: string,
  death: string,
  realm: string,
  hair: string,
  wikiUrl: string
};

export interface QuoteType {
  _id: string, // Unique identifier
  id: string, // Same as above
  dialog: string, // Quote in full
  movie: string, // Movie id
  character: string // Character id
}

export interface ResponseType<T> {
  docs: T,
  limit: number,
  offset: number,
  page: number,
  pages: number,
  total: number
}