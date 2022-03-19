import { Component, OnInit } from '@angular/core';
import { AnimeListService } from './anime-list.service';
import { Element } from 'src/app/data';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit {
  response: Element[] = [];
  loading = false;

  page: number = 1;

  constructor(private al_service: AnimeListService) {}

  ngOnInit(): void {
    this.FetchResults(this.page);
  }

  ScrollDown(): void {
    this.page++;
    this.FetchResults(this.page);
  }

  async FetchResults(_page: number): Promise<void> {
    await this.al_service.GetAnimeList(_page).then((_response) => {
      this.response.push(_response);

      this.loading = true;
    });
  }
}
