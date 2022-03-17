import { Component, OnInit } from '@angular/core';
import { AnimeListService } from './anime-list.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit {
  result: any;

  constructor(private al_service: AnimeListService) {}

  ngOnInit(): void {
    this.FetchResults();
  }

  FetchResults() {
    this.al_service
      .GetAnimeList()
      .subscribe((response) => (this.result = response));
  }
}
