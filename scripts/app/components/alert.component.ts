import { Component, OnInit, OnDestroy, Injectable, ComponentRef, ViewChild, ViewContainerRef, Type, DynamicComponentLoader } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { AlertService, IAlertOptions } from './../services/alert.service';

@Component({
    selector: 'alert',
    template: `
        <div class="modal inmodal fade in" id="alert-modal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">                        
                        <p class="modal-title"><span class="fa {{iconClass}} modal-icon-2"></span>{{title}}</p>
                    </div>
                    <div class="modal-body">
                        <p>{{message}}</p>
                        <div #modalchild [hidden]="_currentRef == null"></div>
                    </div>
                    <div class="modal-footer">
                        <button *ngIf="!hideClose" type="button" class="btn btn-white" data-dismiss="modal" [disabled]="disableClose">Close</button>
                        <button id="confirm-button" class="btn btn-primary ladda-button modal-confirm-button" data-style="expand-right" data-size="xs" (click)="onConfirm()">
                            <span class="ladda-label">{{confirmText}}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        #alert-modal { text-align: center; }
        #alert-modal .modal { display: block; padding-right: 17px; }
        #alert-modal .modal-dialog { display: inline-block; text-align: left; vertical-align: middle; }
        #alert-modal .modal-header { padding: 5px; text-align: left; }
        #alert-modal .modal-icon-2 { margin: 0 5px 0 10px; }
        #alert-modal .modal-title { font-size: 20px; }
        #alert-modal .modal-body { font-size: 16px; text-align: center; padding: 2em; }
        #alert-modal .modal-confirm-button { min-width: 50px; }
        #alert-modal .modal-footer { padding: 5px; }
        @media screen and (min-width: 768px) { 
            #alert-modal:before { display: inline-block; vertical-align: middle; content: " "; height: 100%; }
        }
    `]
})
export class AlertComponent implements OnInit, OnDestroy {
    @ViewChild('modalchild', {read: ViewContainerRef}) child: ViewContainerRef;
    title: string;
    message: string;
    confirmText: string;
    iconClass: string;
    hideClose = false;
    disableClose = false;
    private _confirmCallback: (component?: any) => void;
    private _alert: any;
    private _currentRef: ComponentRef<Type>;
    private _subscriptions: ISubscription[] = [];

    constructor(
        private svc: AlertService,
        private _loader: DynamicComponentLoader) {
        this.reset();
    }

    ngOnInit(): void {   
        Ladda.bind('#confirm-button');
        this._subscriptions.push(this.svc.show$.subscribe(options => this.show(options)));
        this._subscriptions.push(this.svc.hide$.subscribe(() => this.hide()));
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach(sub => sub.unsubscribe());
        this._subscriptions = [];
    }

    private onConfirm(): void {
        this.disableClose = true;
        if (this._confirmCallback)
            this._confirmCallback(this._currentRef == null ? null : this._currentRef.instance);
        else
            this.hide();
    }

    private show(options?: IAlertOptions): void {
        this.reset();
        
        if (options) {
            if (options.title)
                this.title = options.title;
            if (options.message)
                this.message = options.message;
            if (options.confirmButtonText)
                this.confirmText = options.confirmButtonText;
            if (options.hideClose)
                this.hideClose = true;
            if (options.iconClass)
                this.iconClass = options.iconClass;
            if (options.onConfirm)
                this._confirmCallback = options.onConfirm;
            if (options.component) {
                this.destroyComponent();
                this._loader
                    .loadNextToLocation(options.component, this.child)
                    .then(ref => {
                        this._currentRef = ref;
                        if (options.onInit)
                            options.onInit(this._currentRef.instance);
                    });
            }
        }            

        const modal: any = $('#alert-modal');
        modal.modal({ show: true, backdrop: 'static', keyboard: false });
    }

    private hide(): void {
        Ladda.stopAll();
        const modal: any = $('#alert-modal');
        modal.modal('hide');     
        this.destroyComponent();        
    }

    private destroyComponent(): void {
        if (this._currentRef != null) {
            this._currentRef.destroy();
            this._currentRef = null;
        }
    }

    private reset(): void {
        this.title = 'Confirmation';
        this.message = 'Do you wish to proceed?';
        this.confirmText = 'OK';
        this.iconClass = 'fa-question-circle-o';
        this.hideClose = false;
        this.disableClose = false;
        this._confirmCallback = null;
    }
}