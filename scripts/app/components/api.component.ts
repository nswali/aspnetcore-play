import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResourceService } from './../services/resource.service';

@Component({
    template:`
        <h1>API Examples</h1>
        <div>
            <button class="btn btn-primary" (click)="onClick()">Call Service</button>
            <div>
                <label>Response: {{result}}</label>
            </div>
        </div>
    `,
    providers: [ResourceService]
})
export class ApiExamplesComponent implements OnInit, OnDestroy {
    result: string;

    constructor(private _service: ResourceService) { }

    ngOnInit() { }

    ngOnDestroy(): void { }

    onClick(): void {
        this._service.get().subscribe(p => this.result = p);
    }
}