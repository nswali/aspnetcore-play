import { Component, OnInit } from '@angular/core';
import { AlertService } from './../services/alert.service';

@Component({
    moduleId: module.id,
    selector: 'toastr-examples',
    template: `
        <h1>Toastr Examples</h1>
        <div>
            <label>Enter message:</label>
            <input type="text" [(ngModel)]="message" />
            <button class="btn btn-primary" (click)="svc.info(message, 'info', { progressBar: true })">Info</button>
            <button class="btn btn-primary" (click)="svc.success(message)">Success</button>
            <button class="btn btn-primary" (click)="svc.warning(message)">Warning</button>
            <button class="btn btn-primary" (click)="svc.error(message)">Error</button>
        </div>        
    `,
    providers: [AlertService]
})
export class ToastrExamplesComponent implements OnInit {
    message: string;

    constructor(public svc: AlertService) {        
    }

    ngOnInit() {         
    }
}