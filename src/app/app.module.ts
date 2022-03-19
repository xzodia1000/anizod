import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { HomeComponent } from './home/home.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AnimeListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'anime-list', component: AnimeListComponent },
    ]),
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
