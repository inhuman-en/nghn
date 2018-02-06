import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopnewsComponent } from './topnews/topnews.component';

const routes: Routes = [
    { path: 'news', component: TopnewsComponent, data: { feedType: 'news' } },
    { path: 'show', component: TopnewsComponent, data: { feedType: 'show' } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewsfeedRoutingModule {}
