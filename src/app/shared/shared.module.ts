import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HackerNewsService } from './hacker-news.service';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent],
  providers: [HackerNewsService]
})
export class SharedModule { }
