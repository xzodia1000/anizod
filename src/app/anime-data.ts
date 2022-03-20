export interface AnimeElement {
  data: Data | null;
}

export interface Data {
  Media: Media;
}

export interface Media {
  id: number;
  title: Title;
  coverImage: CoverImage;
  bannerImage: string;
  startDate: EndDateClass;
  endDate: EndDateClass;
  description: string;
  season: string;
  seasonYear: number;
  type: Type;
  format: string;
  status: Status;
  episodes: number;
  duration: number;
  chapters: null;
  volumes: null;
  genres: string[];
  synonyms: string[];
  source: string;
  isAdult: boolean;
  isLocked: boolean;
  meanScore: number;
  averageScore: number;
  popularity: number;
  favourites: number;
  isFavouriteBlocked: boolean;
  hashtag: string;
  countryOfOrigin: string;
  isLicensed: boolean;
  isFavourite: boolean;
  isRecommendationBlocked: boolean;
  nextAiringEpisode: null;
  relations: Relations;
  characterPreview: CharacterPreview;
  staffPreview: StaffPreview;
  studios: Studios;
  reviewPreview: ReviewPreview;
  recommendations: Recommendations;
  externalLinks: ExternalLink[];
  streamingEpisodes: StreamingEpisode[];
  trailer: Trailer;
  rankings: Ranking[];
  tags: Tag[];
  mediaListEntry: null;
  stats: Stats;
}

export interface CharacterPreview {
  edges: CharacterPreviewEdge[];
}

export interface CharacterPreviewEdge {
  id: number;
  role: string;
  name: null;
  voiceActors: VoiceActorClass[];
  node: VoiceActorClass;
}

export interface VoiceActorClass {
  id: number;
  name: Name;
  image: Image;
  language?: Language;
}

export interface Image {
  large: string;
}

export enum Language {
  Japanese = 'Japanese',
}

export interface Name {
  userPreferred: string;
}

export interface CoverImage {
  extraLarge: string;
  large: string;
}

export interface EndDateClass {
  year: number;
  month: number;
  day: number;
}

export interface ExternalLink {
  id: number;
  site: string;
  url: string;
  type: string;
  language: Language | null;
  color: null | string;
  icon: null | string;
}

export interface Ranking {
  id: number;
  rank: number;
  type: string;
  format: string;
  year: number | null;
  season: null | string;
  allTime: boolean;
  context: string;
}

export interface Recommendations {
  pageInfo: PageInfo;
  nodes: RecommendationsNode[];
}

export interface RecommendationsNode {
  id: number;
  rating: number;
  userRating: string;
  mediaRecommendation: MediaRecommendation;
  user: User;
}

export interface MediaRecommendation {
  id: number;
  title: Name;
  format: string;
  type: Type;
  status: Status;
  bannerImage: null | string;
  coverImage: Image;
}

export enum Status {
  Finished = 'FINISHED',
  Releasing = 'RELEASING',
}

export enum Type {
  Anime = 'ANIME',
  Manga = 'MANGA',
}

export interface User {
  id: number;
  name: string;
  avatar: Image;
}

export interface PageInfo {
  total: number;
}

export interface Relations {
  edges: RelationsEdge[];
}

export interface RelationsEdge {
  id: number;
  relationType: string;
  node: MediaRecommendation;
}

export interface ReviewPreview {
  pageInfo: PageInfo;
  nodes: ReviewPreviewNode[];
}

export interface ReviewPreviewNode {
  id: number;
  summary: string;
  rating: number;
  ratingAmount: number;
  user: User;
}

export interface StaffPreview {
  edges: StaffPreviewEdge[];
}

export interface StaffPreviewEdge {
  id: number;
  role: string;
  node: VoiceActorClass;
}

export interface Stats {
  statusDistribution: StatusDistribution[];
  scoreDistribution: ScoreDistribution[];
}

export interface ScoreDistribution {
  score: number;
  amount: number;
}

export interface StatusDistribution {
  status: string;
  amount: number;
}

export interface StreamingEpisode {
  site: Site;
  title: string;
  thumbnail: string;
  url: string;
}

export enum Site {
  Crunchyroll = 'Crunchyroll',
}

export interface Studios {
  edges: StudiosEdge[];
}

export interface StudiosEdge {
  isMain: boolean;
  node: PurpleNode;
}

export interface PurpleNode {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
  description: string;
  rank: number;
  isMediaSpoiler: boolean;
  isGeneralSpoiler: boolean;
  userId: number | null;
}

export interface Title {
  userPreferred: string;
  romaji: string;
  english: string;
  native: string;
}

export interface Trailer {
  id: string;
  site: string;
}
