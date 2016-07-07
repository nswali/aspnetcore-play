import { Component, OnInit } from '@angular/core';
import {InputText} from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'primeng-examples',
    template: `
        <h1>PrimeNG Examples</h1>
        <label>Prime NG Input</label>
        <input type="text" pInputText [(ngModel)]="text" /> {{text}}
    `,
    directives: [InputText]
})
export class PrimeNgExamplesComponent implements OnInit {
    text: string;

    constructor() {         
    }

    ngOnInit() {         
    }
}