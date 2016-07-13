import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface IAlertOptions {
    message?: string;
    title?: string;    
    confirmButtonText?: string;
    onConfirm?: () => void;
}

@Injectable()
export class AlertService {
    private _showSource = new Subject<IAlertOptions>();
    private _hideSource = new Subject();
    show$ = this._showSource.asObservable();
    hide$ = this._hideSource.asObservable();

    constructor() {        
    }

    info(message: string, title?: string, options?: ToastrOptions): JQuery {
        return toastr.info(message, title, options);
    }

    success(message: string, title?: string, options?: ToastrOptions): JQuery {
        return toastr.success(message, title, options);
    }

    warning(message: string, title?: string, options?: ToastrOptions): JQuery {
        return toastr.warning(message, title, options);
    }

    error(message: string, title?: string, options?: ToastrOptions): JQuery {
        return toastr.error(message, title, options);
    }

    confirm(options?: IAlertOptions): void {
        this._showSource.next(options);
    }

    hideConfirm(): void {
        this._hideSource.next({});
    }
}