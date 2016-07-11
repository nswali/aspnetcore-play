import { Component, AfterViewInit } from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';
import {PrimeNgExamplesComponent} from './components/primeng.component';
import {ToastrExamplesComponent} from './components/toastr.component';
import {BootstrapDatepickerExamplesComponent} from './components/bootstrap-datepicker.component';
import {Auth0ExamplesComponent} from './components/auth0.component';
import {DropzoneExamplesComponent} from './components/dropzone.component';
import {BootstrapAlertComponent} from './components/bootstrap-alert.component';
import {ModalLoaderComponent} from './components/modal-loader.component';
declare var inspinia: any;

@Component({
    selector: 'my-app',
    template: `
        <div id="wrapper">
            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <li class="nav-header">
                            <div class="dropdown profile-element">
                                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                    <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">David Williams</strong>
                                     </span> <span class="text-muted text-xs block">Art Director <b class="caret"></b></span> </span> </a>
                                    <ul class="dropdown-menu animated fadeInRight m-t-xs">
                                        <li><a href="#">Logout</a></li>
                                    </ul>
                            </div>
                            <div class="logo-element">
                                IN+
                            </div>
                        </li>
                        <li class="active"><a [routerLink]="['Primeng']"><i class="fa fa-th-large"></i> <span class="nav-label">Prime NG Examples</span></a></li>
                        <li><a [routerLink]="['Toastr']"><i class="fa fa-th-large"></i> <span class="nav-label">Toastr Examples</span></a></li>
                        <li><a [routerLink]="['BootstrapDatepicker']"><i class="fa fa-th-large"></i> <span class="nav-label">BS-Datepicker Examples</span></a></li>
                        <li><a [routerLink]="['Auth0']"><i class="fa fa-th-large"></i> <span class="nav-label">Auth0 Examples</span></a></li>
                        <li><a [routerLink]="['Dropzone']"><i class="fa fa-th-large"></i> <span class="nav-label">Dropzone Examples</span></a></li>
                        <li><a [routerLink]="['BootstrapAlert']"><i class="fa fa-th-large"></i> <span class="nav-label">BS-Alert Examples</span></a></li>
                        <li><a [routerLink]="['ModalLoader']"><i class="fa fa-th-large"></i> <span class="nav-label">Loader Examples</span></a></li>
                    </ul>
                </div>
            </nav>

            <div id="page-wrapper" class="gray-bg">
                <div class="row border-bottom">
                    <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
                        <div class="navbar-header">
                            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary"><i class="fa fa-bars"></i> </a>
                            <form role="search" class="navbar-form-custom" method="post" action="#">
                                <div class="form-group">
                                    <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search">
                                </div>
                            </form>
                        </div>
                        <ul class="nav navbar-top-links navbar-right">
                            <li>
                                <a href="#">
                                    <i class="fa fa-sign-out"></i> Log out
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="wrapper wrapper-content animated fadeInRight">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-center m-t-lg">
                                <router-outlet></router-outlet>                                                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="pull-right">
                        10GB of <strong>250GB</strong> Free.
                    </div>
                    <div>
                        <strong>Copyright</strong> Example Company &copy; {{year}}
                    </div>
                </div>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { name: 'Primeng', path: '\primeng', component: PrimeNgExamplesComponent, useAsDefault: true },
    { name: 'Toastr', path: '\toastr', component: ToastrExamplesComponent },
    { name: 'BootstrapDatepicker', path: '\bootstrap-datepicker', component: BootstrapDatepickerExamplesComponent },
    { name: 'Auth0', path: '\auth0', component: Auth0ExamplesComponent },
    { name: 'Dropzone', path: '\dropzone', component: DropzoneExamplesComponent },
    { name: 'BootstrapAlert', path: '\bootstrap-alert', component: BootstrapAlertComponent },
    { name: 'ModalLoader', path: 'modal-loader', component: ModalLoaderComponent },
])
export class AppComponent implements AfterViewInit {
    text: string;
    year = new Date(Date.now()).getFullYear();

    ngAfterViewInit(): void {
        inspinia.init();
    }
}
