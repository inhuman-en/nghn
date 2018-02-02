import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceManagerService {
    state: Object = {};

    constructor() {}

    save(key: string, value: any): void {
        // TODO: objects passed should be cloned
        this.state[key] = value;
        localStorage.setItem(key, JSON.stringify(value));
    }

    get(key: string) {
        return this.state[key] !== undefined
            ? this.state[key]
            : JSON.parse(localStorage.getItem(key));
    }

    saveTheme(theme): void {
        this.save('color-theme', theme);
    }
}
