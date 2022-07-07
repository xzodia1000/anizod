import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { SearchElement } from '../query-data/search-data';
import { SearchService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user_search = new FormControl('');

  response!: SearchElement;

  empty: boolean = false;
  loading: boolean = false;
  searching: boolean = false;

  constructor(private service: SearchService) { }

  ngOnInit(): void {
    this.OnChange();
  }

  FetchSearch(_search: string): void {
    if (_search.length == 2 || _search.length == 1) {
      this.empty = false;
      this.loading = false;
      this.searching = true;
    } else if (_search.length > 2) {
      this.empty = false;
      this.service.GetSearch(_search).then((_response) => {
        this.response = _response;
        this.loading = true;
        this.searching = false;

        if (_response.data?.anime.pageInfo.total == 0) {
          this.empty = true;
        }
      });
    } else {
      this.empty = false;
      this.loading = false;
      this.searching = false;

    }
  }

  OnChange(): void {
    this.user_search.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((_input) => this.FetchSearch(_input));
  }
}
