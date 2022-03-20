import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AnimeElement } from '../anime-data';
import { AnimeService } from './anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
})
export class AnimeComponent implements OnInit {
  response!: AnimeElement;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: AnimeService
  ) {}

  ngOnInit(): void {
    this.FetchAnime();
  }

  FetchAnime(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.GetAnime(id).then((_response) => {
      this.response = _response;
      this.loading = true;
    });
  }
}
