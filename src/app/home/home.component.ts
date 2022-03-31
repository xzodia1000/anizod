import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { SearchElement } from '../search-data';
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

  constructor(private service: SearchService) {}

  ngOnInit(): void {
    this.OnChange();
  }

  FetchSearch(_search: string) {
    if (_search.length == 2 || _search.length == 1) {
      this.empty = false;
      this.loading = false;
    } else if (_search.length > 2) {
      this.empty = false;
      this.loading = true;
      this.service.GetSearch(_search).then((_response) => {
        this.response = _response;
      });
    } else {
      this.empty = true;
      this.loading = false;
    }
  }

  OnChange(): void {
    this.user_search.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((_input) => this.FetchSearch(_input));
  }
}
