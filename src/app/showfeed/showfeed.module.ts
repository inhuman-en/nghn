import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/index';

import { ShowFeedRoutingModule } from './showfeed-routing.module';
import { TopnewsComponent, NewsitemComponent } from '../shared/index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShowFeedRoutingModule
  ]
})
export class ShowFeedModule { }
