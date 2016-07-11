import { provideRouter, RouterConfig } from '@angular/router';
import {HomeComponent} from './components/home.component';
import {PrimeNgExamplesComponent} from './components/primeng.component';
import {ToastrExamplesComponent} from './components/toastr.component';
import {BootstrapDatepickerExamplesComponent} from './components/bootstrap-datepicker.component';
import {Auth0ExamplesComponent} from './components/auth0.component';
import {DropzoneExamplesComponent} from './components/dropzone.component';
import {BootstrapAlertComponent} from './components/bootstrap-alert.component';
import {ModalLoaderComponent} from './components/modal-loader.component';
import {ApiComponent} from './components/api.component';
import {FormsComponent} from './components/forms.component';

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'primeng', component: PrimeNgExamplesComponent },
    { path: 'toastr', component: ToastrExamplesComponent },
    { path: 'bootstrap-datepicker', component: BootstrapDatepickerExamplesComponent },
    { path: 'auth0', component: Auth0ExamplesComponent },
    { path: 'dropzone', component: DropzoneExamplesComponent },
    { path: 'bootstrap-alert', component: BootstrapAlertComponent },
    { path: 'modal-loader', component: ModalLoaderComponent },
    { path: 'api-test', component: ApiComponent },
    { path: 'forms', component: FormsComponent },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];