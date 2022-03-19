import { Component, OnInit } from '@angular/core';
import { AnimeListService } from './anime-list.service';
import { Element, Data, Page, Media } from 'src/app/data';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit {
  response!: Element;
  loading = false;

  constructor(private al_service: AnimeListService) {}

  ngOnInit(): void {
    this.FetchResults(1);
  }

  async FetchResults(_page: number): Promise<void> {
    await this.al_service.GetAnimeList(_page).then((_response) => {
      this.response = _response;

      this.loading = true;
    });
  }
}
