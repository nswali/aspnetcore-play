import { Component, OnInit } from '@angular/core';
declare var sweetAlert: any;

@Component({
    template: `
        <h1>Sweet Alert 2 Examples</h1>
        <button class="btn btn-primary" (click)="show()">Show</button>
    `
})
export class SweetAlertExamplesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    show(): void {
        sweetAlert('Information', 'Hello from Sweet Alert!', 'info');
    }
}