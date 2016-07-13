import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { AlertService } from './../services/alert.service';
import { AlertComponent } from './alert.component';

@Component({
    template: `
        <h1>Bootstrap Alert Examples</h1>
        <div>
            <button class="btn btn-primary" (click)="onShow()">Show</button>
            <alert></alert>
        </div>
    `,
    directives: [AlertComponent],
    providers: [AlertService]
})
export class BootstrapAlertExamplesComponent {    

    constructor(private svc: AlertService) { 
    }
    
    private onShow(): void {
        this.svc.confirm({ 
            message: 'Do you want to save your changes?',
            title: 'Save Changes?',              
            confirmButtonText: 'Save?', 
            onConfirm: () => {
                const self = this;
                setTimeout(() => {
                    self.svc.hideConfirm();
                    self.svc.success('done!');
                }, 3000);
            }
        });
    }
}