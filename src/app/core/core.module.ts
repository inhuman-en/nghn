import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BrowserAnimationsModule,
        SharedModule
    ],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class CoreModule {}
