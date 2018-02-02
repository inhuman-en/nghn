import { Component, HostBinding, OnInit } from '@angular/core';
import { PersistenceManagerService } from './shared';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @HostBinding('class.theme-frost') themeFrost = true;
    @HostBinding('class.theme-aurora') themeAurora = false;

    constructor(private storage: PersistenceManagerService) {}

    ngOnInit() {
        const storedTheme = this.storage.get('color-theme');

        if (storedTheme !== null) {
            this.onThemeChanged(storedTheme);
        }
    }

    onThemeChanged(theme: string): void {
        this.themeFrost = theme === 'theme-frost';
        this.themeAurora = theme === 'theme-aurora';
    }
}
