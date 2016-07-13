import { bootstrap }    from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { Http, HTTP_PROVIDERS } from '@angular/http'; 
import './rxjs-operators';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [    
    HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),    
    APP_ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: PathLocationStrategy })
]);
