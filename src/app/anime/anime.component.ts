import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeElement, CharacterPreviewEdge } from '../query-data/anime-data';
import { AnimeService } from './anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
})
export class AnimeComponent implements OnInit {
  response!: AnimeElement;
  loading: boolean = false;

  months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  start_month: number = -1;
  end_month: number = -1;

  status: string | undefined;
  episodes: number | undefined;
  genres: string[] | undefined = [];
  characters: CharacterPreviewEdge[][] | undefined = [];

  english: string | undefined;
  romaji: string | undefined;

  constructor(private route: ActivatedRoute, private service: AnimeService) { }

  ngOnInit(): void {
    this.FetchAnime();
  }

  FetchAnime(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.GetAnime(id).then((_response) => {
      this.response = _response;
      this.Info();
    }).catch(reason => console.log("fail"));
  }

  Info(): void {
    this.english = this.response?.data?.Media.title.english;
    this.romaji = this.response?.data?.Media.title.romaji;

    this.start_month =
      this.response.data?.Media.startDate.month != null
        ? this.response.data.Media.startDate.month - 1
        : -1;

    this.end_month =
      this.response.data?.Media?.endDate?.month != null
        ? this.response.data.Media.endDate.month - 1
        : -1;

    this.status = this.response.data?.Media.status;

    if (this.status == 'FINISHED') {
      this.status = 'Finished';
    } else if (this.status == 'RELEASING') {
      this.status = 'Releasing';
    } else if (this.status == 'NOT_YET_RELEASED') {
      this.status = 'Not Yet Released';
    } else if (this.status == 'CANCELLED') {
      this.status = 'Cancelled';
    } else if (this.status == 'HIATUS') {
      this.status = 'Hiatus';
    }

    this.episodes =
      this.response.data?.Media.episodes != null
        ? this.response.data.Media.episodes
        : -1;

    this.genres = this.response.data?.Media.genres;

    this.loading = true;

    const chars =
      this.response.data?.Media.characterPreview.edges != null
        ? this.response.data.Media.characterPreview.edges
        : [];

    var index = 0;
    var indicator = 1;

    while (indicator) {
      var tmp = [];
      for (let i = 0; i < 3; i++) {
        if (index == chars.length) {
          indicator = 0;
          break;
        }

        tmp.push(chars[index]);
        index++;
      }

      if (tmp.length != 0) {
        this.characters?.push(tmp);
      }
    }

    console.log(this.characters);
  }
}
