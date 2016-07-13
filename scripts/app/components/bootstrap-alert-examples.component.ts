import { Component, OnInit, OnDestroy, Injectable, Type, Input } from '@angular/core';
import { AlertService, IAlertOptions } from './../services/alert.service';
import { AlertComponent } from './alert.component';

@Component({
    template: `
        <h1>Bootstrap Alert Examples</h1>
        <div>
            <button class="btn btn-primary" (click)="onShow(false)">Show</button>
            <button class="btn btn-primary" (click)="onShow(true)">Show With Custom Content</button>
            <button class="btn btn-primary" (click)="onShowModal('fa-info-circle', 'Information')">Show Modal Info</button>
            <button class="btn btn-primary" (click)="onShowModal('fa-exclamation-circle', 'Error')">Show Modal Error</button>
            <alert></alert>
        </div>
    `,
    directives: [AlertComponent],
    providers: [AlertService]
})
export class BootstrapAlertExamplesComponent {    

    constructor(private svc: AlertService) { 
    }
    
    private onShow(custom: boolean): void {
        let options: IAlertOptions = { 
            title: 'Save Changes?',              
            confirmButtonText: 'Save?'
        };

        if (custom) {
            options.component = ModelChildComponent;
            options.onInit = (component: ModelChildComponent) => component.text = 'Initialised from outside';
        }

        this.svc.confirm(
            'Do you want to save your changes?', 
            component => {
                 const self = this;
                setTimeout(() => {
                    if (component)
                        self.svc.success(component.text, null, true);
                    else
                        self.svc.success('done!', null, true);
                }, 3000);
            }, 
            options);
    }

    private onShowModal(iconClass: string, title: string): void {
        this.svc.modal('This is some modal information', title, component => {
            const self = this;
            setTimeout(() => {
                self.svc.success('done!', null, true);
            }, 3000);
        }, 
        { iconClass: iconClass });
    }
}

@Component({
    template: `
        <input class="input" [(ngModel)]="text" />
    `,
    styles: ['.input { width: 270px; }']
})
export class ModelChildComponent {
    @Input('text') text: string;
}