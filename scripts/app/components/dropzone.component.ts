import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    template: `
        <h1>Dropzone Examples</h1>
        <div id="my-dropzone" class="row dropzone needsclick dz-clickable"></div>
        <div class="row m-b-sm m-t-sm">
            <button (click)="upload()" class="btn btn-primary pull-right">Upload</button>
        </div>   
    `
})
export class DropzoneExamplesComponent implements OnInit, AfterViewInit {
    private _dropzone: Dropzone;

    constructor() { }

    ngOnInit() { 
        Dropzone.autoDiscover = false;
    }

    ngAfterViewInit(): void {
        this._dropzone = new Dropzone('#my-dropzone', {  
            url: 'wibble',
            addRemoveLinks: true,
            autoProcessQueue: false,
            clickable: true,
            uploadMultiple: false
        });
    }

    upload(): void {
    }
}