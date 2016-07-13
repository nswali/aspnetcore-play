import { provideRouter, RouterConfig } from '@angular/router';
import {HomeComponent} from './components/home.component';
import {PrimeNgExamplesComponent} from './components/primeng.component';
import {ToastrExamplesComponent} from './components/toastr.component';
import {BootstrapDatepickerExamplesComponent} from './components/bootstrap-datepicker.component';
import {Auth0ExamplesComponent} from './components/auth0.component';
import {DropzoneExamplesComponent} from './components/dropzone.component';
import {BootstrapAlertExamplesComponent} from './components/bootstrap-alert-examples.component';
import {ModalLoaderExamplesComponent} from './components/modal-loader.component';
import {ApiExamplesComponent} from './components/api.component';
import {FormsExamplesComponent} from './components/forms.component';
import {SweetAlertExamplesComponent} from './components/sweetalert.component';

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'primeng', component: PrimeNgExamplesComponent },
    { path: 'toastr', component: ToastrExamplesComponent },
    { path: 'bootstrap-datepicker', component: BootstrapDatepickerExamplesComponent },
    { path: 'auth0', component: Auth0ExamplesComponent },
    { path: 'dropzone', component: DropzoneExamplesComponent },
    { path: 'bootstrap-alert', component: BootstrapAlertExamplesComponent },
    { path: 'modal-loader', component: ModalLoaderExamplesComponent },
    { path: 'api-test', component: ApiExamplesComponent },
    { path: 'forms', component: FormsExamplesComponent },
    { path: 'sweetalert', component: SweetAlertExamplesComponent },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];