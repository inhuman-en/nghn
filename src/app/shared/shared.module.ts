import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HackerNewsService } from './hacker-news.service';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorComponent } from './paginator/paginator.component';
import { PersistenceManagerService } from './persistence-manager.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent],
  providers: [HackerNewsService, PersistenceManagerService]
})
export class SharedModule { }
