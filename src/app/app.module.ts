import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NewsfeedModule } from './newsfeed/newsfeed.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, CoreModule, NewsfeedModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
