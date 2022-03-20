export interface SearchElement {
  data: Data | null;
}

export interface Data {
  anime: Anime;
  manga: Anime;
  characters: Characters;
  staff: Characters;
  studios: Studios;
  users: Users;
}

export interface Anime {
  pageInfo: PageInfo;
  results: AnimeResult[];
}

export interface PageInfo {
  total: number;
}

export interface AnimeResult {
  id: number;
  title: Title;
  coverImage: CoverImage;
  type: Type;
  format: string;
  bannerImage: null | string;
  isLicensed: boolean;
  startDate: StartDate;
}

export interface CoverImage {
  medium: string;
}

export interface StartDate {
  year: number;
}

export interface Title {
  romaji: string;
}

export enum Type {
  Anime = 'ANIME',
  Manga = 'MANGA',
}

export interface Characters {
  pageInfo: PageInfo;
  results: CharactersResult[];
}

export interface CharactersResult {
  id: number;
  name: Title;
  image: CoverImage;
  primaryOccupations?: PrimaryOccupation[];
}

export enum PrimaryOccupation {
  Mangaka = 'Mangaka',
  Vocalist = 'Vocalist',
  VoiceActor = 'Voice Actor',
}

export interface Studios {
  pageInfo: PageInfo;
  results: StudiosResult[];
}

export interface StudiosResult {
  id: number;
  name: string;
}

export interface Users {
  results: UsersResult[];
}

export interface UsersResult {
  id: number;
  name: string;
  avatar: CoverImage;
}
