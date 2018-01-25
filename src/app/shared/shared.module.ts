import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackerNewsService } from './hacker-news.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [HackerNewsService]
})
export class SharedModule { }
