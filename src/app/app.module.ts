import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { HomeComponent } from './home/home.component';
import { AnimeComponent } from './anime/anime.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AnimeListComponent,
    HomeComponent,
    AnimeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'anime-list', component: AnimeListComponent },
      { path: 'anime/:id', component: AnimeComponent },
    ], { useHash: true }),
    HttpClientModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
