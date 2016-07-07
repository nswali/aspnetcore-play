import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    template: `
        <h1>Bootstrap Datepicker Examples</h1>
        <input id="date" />
        <label>Selected date: {{date | date}}</label>
    `
})
export class BootstrapDatepickerExamplesComponent implements OnInit, AfterViewInit {
    date: Date;
    constructor() { }

    ngOnInit() { }

    ngAfterViewInit(): void {
        const date: any = $('#date');
        date
            .datepicker({ orientation: 'auto', format: 'dd/mm/yyyy', language: 'en', autoclose: true })
            .on('changeDate', e => this.date = e.date);;
    }
}