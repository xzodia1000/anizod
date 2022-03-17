import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AnimeListService {
  url = 'https://graphql.anilist.co';
  query = {
    query: 'query { Media (id: 22, type: ANIME) { title { romaji } } }',
  };

  constructor(private http: HttpClient) {}

  GetAnimeList(): Observable<any> {
    return this.http.post<any>(this.url, this.query);
  }
}
