import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopnewsComponent } from './topnews/topnews.component';

const routes: Routes = [{ path: 'feed', component: TopnewsComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewsfeedRoutingModule {}
