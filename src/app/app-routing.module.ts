import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { TopnewsComponent} from './shared';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/news?page=1'
    },
    { path: 'show', loadChildren: 'app/showfeed/showfeed.module#ShowFeedModule' },
    { path: 'news', loadChildren: 'app/newsfeed/newsfeed.module#NewsFeedModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
