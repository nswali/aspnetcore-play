import { Component, OnInit } from '@angular/core';
declare var toastr: any;

@Component({
    moduleId: module.id,
    selector: 'toastr-examples',
    template: `
        <h1>Toastr Examples</h1>
        <div>
            <label>Enter message:</label>
            <input type="text" [(ngModel)]="message" />
            <a class="btn btn-primary" (click)="showToastr()"><i class="fa fa-trash-o fa-lg"></i> Show</a>
        </div>        
    `
})
export class ToastrExamplesComponent implements OnInit {
    message: string;

    constructor() {        
    }

    ngOnInit() {         
    }

    showToastr(): void {
        toastr.success(this.message, 'Hello from Toastr');
    }
}