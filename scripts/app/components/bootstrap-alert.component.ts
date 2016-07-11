import { Component, OnInit, Injectable } from '@angular/core';

@Injectable()
export class BootstrapAlertService {
    constructor() {         
    }

    show(): void {
        const modal: any = $('#alert-modal');
        modal.modal('show');
    }
}

@Component({
    template: `
        <h1>Bootstrap Alert Examples</h1>
        <div>
            <button class="btn btn-primary" (click)="svc.show()">Show</button>
        </div>
        <div class="modal inmodal fade in alert-modal" id="alert-modal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Modal title</h4>
                    </div>
                    <div class="modal-body">
                        <p><strong>Lorem Ipsum is simply dummy</strong> text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-white" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: ['.alert-model { display: block; padding-right: 17px; }'],
    providers: [BootstrapAlertService]
})
export class BootstrapAlertComponent implements OnInit {
    constructor(private svc: BootstrapAlertService) { 
    }

    ngOnInit() {         
    }
}