import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { lastValueFrom, Observable, throwError } from 'rxjs';
import { SearchElement } from 'src/app/search-data';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  url = 'https://graphql.anilist.co';

  _query =
    'query($search:String,$isAdult:Boolean){anime:Page(perPage:8){pageInfo{total}results:media(type:ANIME,isAdult:$isAdult,search:$search){id title{romaji}coverImage{medium}type format bannerImage isLicensed startDate{year}}}manga:Page(perPage:8){pageInfo{total}results:media(type:MANGA,isAdult:$isAdult,search:$search){id title{romaji}coverImage{medium}type format bannerImage isLicensed startDate{year}}}characters:Page(perPage:8){pageInfo{total}results:characters(search:$search){id name{full}image{medium}}}staff:Page(perPage:8){pageInfo{total}results:staff(search:$search){id primaryOccupations name{full}image{medium}}}studios:Page(perPage:13){pageInfo{total}results:studios(search:$search){id name}}users:Page(perPage:8){results:users(search:$search){id name avatar{medium}}}}';

  constructor(private http: HttpClient) {}

  async GetSearch(_search: string): Promise<SearchElement> {
    var query = {
      query: this._query,
      variables: {
        search: _search,
      },
    };

    const response = this.http.post<SearchElement>(this.url, query);

    return lastValueFrom(response);
  }
}
