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

  loading: boolean = false;

  constructor(private service: SearchService) {}

  ngOnInit(): void {
    this.OnChange();
  }

  FetchSearch(_search: string) {
    if (_search.length <= 3) {
      console.log('give some 3 letters');
    } else {
      this.service.GetSearch(_search).then((_response) => {
        this.response = _response;
        this.loading = true;
      });
    }
  }

  OnChange(): void {
    this.user_search.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((_input) => this.FetchSearch(_input));
  }
}
