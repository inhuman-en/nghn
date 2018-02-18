import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PersistenceManagerService } from '../../shared';

interface Theme {
    className: string;
    name: string;
    active: boolean;
}

@Component({
    selector: 'hn-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Output() themeChanged: EventEmitter<string> = new EventEmitter<string>();

    themes: Array<Theme> = [
        {
            className: 'theme-frost',
            name: 'Frost',
            active: false
        },
        {
            className: 'theme-aurora',
            name: 'Aurora',
            active: false
        }
    ];

    constructor(private storage: PersistenceManagerService) {}

    ngOnInit() {
        const storedTheme = this.storage.get('color-theme') || 'theme-frost';

        this.themes.forEach((theme: Theme) => {
            theme.active = theme.className === storedTheme;
        });
    }

    changeTheme(newTheme: string): void {
        this.storage.saveTheme(newTheme);
        this.themeChanged.emit(newTheme);
    }
}
