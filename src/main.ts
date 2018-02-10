import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import registerServiceWorker from './register-service-worker';

import './styles/common.scss';

if (environment.production) {
    enableProdMode();
    registerServiceWorker();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
