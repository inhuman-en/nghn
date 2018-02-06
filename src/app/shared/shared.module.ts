import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HackerNewsService } from './hacker-news.service';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorComponent } from './paginator/paginator.component';
import { PersistenceManagerService } from './persistence-manager.service';
import { TopnewsComponent } from './topnews/topnews.component';
import { NewsitemComponent } from './newsitem/newsitem.component';

@NgModule({
    imports: [CommonModule, HttpClientModule, RouterModule],
    declarations: [PaginatorComponent, TopnewsComponent, NewsitemComponent],
    exports: [PaginatorComponent, TopnewsComponent, NewsitemComponent],
    providers: [HackerNewsService, PersistenceManagerService]
})
export class SharedModule {}
