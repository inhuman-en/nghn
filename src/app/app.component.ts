import { Component, HostBinding, OnInit, ElementRef } from '@angular/core';
import { PersistenceManagerService } from './shared';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private el: ElementRef,private storage: PersistenceManagerService) {}

    ngOnInit() {
        const storedTheme = this.storage.get('color-theme');

        if (storedTheme !== null) {
            this.onThemeChanged(storedTheme);
        }
    }

    onThemeChanged(theme: string): void {
        const { classList } = this.el.nativeElement;

        for (const className of classList) {
            if (className.startsWith('theme')) {
                classList.replace(className, theme);
            }
        }
    }
}
