import { Component, OnInit } from '@angular/core';
import { AnimeListService } from './anime-list.service';
import { ListElement } from 'src/app/query-data/list-data';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit {
  response: ListElement[] = [];
  loading: boolean = false;
  page: number = 1;

  constructor(private service: AnimeListService) { }

  ngOnInit(): void {
    this.FetchResults();
  }

  ScrollDown(): void {
    this.page++;
    this.FetchResults();
  }

  FetchResults(): void {
    this.service.GetAnimeList(this.page).then((_response) => {
      this.response.push(_response);
      this.loading = true;
    });
  }
}
