export interface Element {
  data: Data | null;
}

export interface Data {
  Page: Page;
}

export interface Page {
  pageInfo: PageInfo;
  media: Media[];
}

export interface Media {
  id: number;
  title: Title;
  coverImage: CoverImage;
  startDate: EndDateClass;
  endDate: EndDateClass;
  bannerImage: string;
  season: Season;
  seasonYear: number;
  description: string;
  type: Type;
  format: Format;
  status: Status;
  episodes: number | null;
  duration: number;
  chapters: null;
  volumes: null;
  genres: string[];
  isAdult: boolean;
  averageScore: number;
  popularity: number;
  nextAiringEpisode: NextAiringEpisode | null;
  mediaListEntry: null;
  studios: Studios;
}

export interface CoverImage {
  extraLarge: string;
  large: string;
  color: string;
}

export interface EndDateClass {
  year: number | null;
  month: number | null;
  day: number | null;
}

export enum Format {
  Movie = 'MOVIE',
  Ova = 'OVA',
  Tv = 'TV',
}

export interface NextAiringEpisode {
  airingAt: number;
  timeUntilAiring: number;
  episode: number;
}

export enum Season {
  Fall = 'FALL',
  Spring = 'SPRING',
  Summer = 'SUMMER',
  Winter = 'WINTER',
}

export enum Status {
  Finished = 'FINISHED',
  Releasing = 'RELEASING',
}

export interface Studios {
  edges: Edge[];
}

export interface Edge {
  isMain: boolean;
  node: Node;
}

export interface Node {
  id: number;
  name: string;
}

export interface Title {
  romaji: string;
}

export enum Type {
  Anime = 'ANIME',
}

export interface PageInfo {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}
