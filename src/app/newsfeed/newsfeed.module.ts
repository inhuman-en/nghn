import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/index';

import { NewsfeedRoutingModule } from './newsfeed-routing.module';
import { TopnewsComponent } from './topnews/topnews.component';
import { NewsitemComponent } from './newsitem/newsitem.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NewsfeedRoutingModule
  ],
  declarations: [TopnewsComponent, NewsitemComponent],
  exports: [TopnewsComponent]
})
export class NewsfeedModule { }
