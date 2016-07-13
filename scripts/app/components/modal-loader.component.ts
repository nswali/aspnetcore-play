import { Component, OnInit, Injectable } from '@angular/core';

@Injectable()
export class ModalLoaderService {
    show(): void {
        const modal: any = $('#modal-loader');
        modal.modal('show');        
    }

    hide(): void {
        const modal: any = $('#modal-loader');
        modal.modal('hide');        
    }
}

@Component({
    template: `
        <h1>Modal Loader Examples</h1>
        <div>
            <button class="btn btn-primary" (click)="show()">Show</button>
        </div>
        <div class="modal fade in" id="modal-loader" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="loading">
                <img alt="Loading..." src="images/ajax-loader.gif">
            </div>
        </div>
    `,
    providers: [ModalLoaderService],
    styles: [`
        .loading {
            display: block;
            position: fixed;
            z-index: 100;
            left: 50%;
            top: 50%;
        }
    `]
})
export class ModalLoaderExamplesComponent implements OnInit {
    constructor(private svc: ModalLoaderService) { }

    ngOnInit() { }

    show(): void {
        this.svc.show();
        const self = this;
        //setTimeout(() => self.svc.hide(), 5000);
    }
}