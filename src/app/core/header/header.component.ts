import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PersistenceManagerService } from '../../shared';


@Component({
    selector: 'hn-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Output() themeChanged: EventEmitter<string> = new EventEmitter<string>();

    themes: Array<Object> = [
        {
            className: 'theme-frost',
            name: 'Frost'
        },
        {
            className: 'theme-aurora',
            name: 'Aurora'
        }
    ];

    currentTheme = 'theme-frost';

    constructor(private storage: PersistenceManagerService) {}

    ngOnInit() {
        const storedTheme = this.storage.get('color-theme');

        if (storedTheme !== null) {
            this.currentTheme = storedTheme;
        }
    }

    changeTheme(newTheme: string): void {
        this.storage.saveTheme(newTheme);
        this.themeChanged.emit(newTheme);
    }
}
