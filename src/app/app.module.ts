import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NewsFeedModule } from './newsfeed/newsfeed.module';
import { ShowFeedModule } from './showfeed/showfeed.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        NewsFeedModule,
        ShowFeedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
