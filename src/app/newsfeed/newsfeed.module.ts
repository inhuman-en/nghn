import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/index';

import { NewsFeedRoutingModule } from './newsfeed-routing.module';
import { TopnewsComponent, NewsitemComponent } from '../shared/index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NewsFeedRoutingModule
  ]
})
export class NewsFeedModule { }
