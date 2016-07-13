import { Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface IAlertOptions {
    message?: string;
    title?: string;
    hideClose?: boolean;
    confirmButtonText?: string;
    iconClass?: string,
    onConfirm?: (component?: any) => void;
    onInit?: (component?: any) => void;
    component?: Type;
}

@Injectable()
export class AlertService {
    private _showSource = new Subject<IAlertOptions>();
    private _hideSource = new Subject();
    show$ = this._showSource.asObservable();
    hide$ = this._hideSource.asObservable();

    constructor() {        
    }

    info(message: string, title?: string, hideConfirm?: boolean, options?: ToastrOptions): JQuery {
        if (hideConfirm === true)
            this.hideConfirm();

        return toastr.info(message, title, options);
    }

    success(message: string, title?: string, hideConfirm?: boolean, options?: ToastrOptions): JQuery {
        if (hideConfirm === true)
            this.hideConfirm();

        return toastr.success(message, title, options);
    }

    warning(message: string, title?: string, hideConfirm?: boolean, options?: ToastrOptions): JQuery {
        if (hideConfirm === true)
            this.hideConfirm();

        return toastr.warning(message, title, options);
    }

    error(message: string, title?: string, hideConfirm?: boolean, options?: ToastrOptions): JQuery {
        if (hideConfirm === true)
            this.hideConfirm();

        return toastr.error(message, title, options);
    }

    modal(message: string, title: string, onConfirm: (component?: any) => void, options?: IAlertOptions): void {
        let modalOptions: IAlertOptions = {
            message: message,
            title: title,
            onConfirm: onConfirm,
            confirmButtonText: 'OK',
            hideClose: true,
            iconClass: 'fa-info-circle'
        };

        if (options) {
            if (options.confirmButtonText)
                modalOptions.confirmButtonText = options.confirmButtonText;
            if (options.iconClass)
                modalOptions.iconClass = options.iconClass;
            modalOptions.component = options.component;
            modalOptions.onInit = options.onInit;
        }

        this._showSource.next(modalOptions);
    }

    confirm(message: string, onConfirm: (component?: any) => void, options?: IAlertOptions): void {
        let confirmOptions: IAlertOptions = {
            message: message,
            onConfirm: onConfirm,
            iconClass: 'fa-question-circle'
        };

        if (options) {
            confirmOptions.title = options.title;
            confirmOptions.confirmButtonText = options.confirmButtonText;
            confirmOptions.component = options.component;
            confirmOptions.onInit = options.onInit;
        }

        this._showSource.next(confirmOptions);
    }

    hideConfirm(): void {
        this._hideSource.next({});
    }
}