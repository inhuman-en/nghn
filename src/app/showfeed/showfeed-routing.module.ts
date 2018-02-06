import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopnewsComponent } from '../shared/index';


const routes: Routes = [
    { path: '', component: TopnewsComponent, data: { feedType: 'show' } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowFeedRoutingModule {}
