import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
    template: `
        <h1>Forms Examples</h1>
        <div class="row col-lg-4">
            <h2>Basic existing form with validation</h2>
            <form [formGroup]="form1">
                <div formGroupName="name">
                    <div class="form-group">
                        <label for="first">First name:</label>
                        <input id="first" name="first" class="form-control" type="text" formControlName="first" required />
                        <!--div [hidden]="form1.controls.name.controls.first.valid || form1.controls.name.controls.first.pristine" class="alert alert-danger">
                            Please fix errors
                        </div-->
                    </div>
                    <div class="form-group">
                        <label for="first">Last name:</label>
                        <input id="last" name="last" class="form-control" type="text" formControlName="last" required />
                        <!--div [hidden]="form1.controls.name.controls.last.valid || form1.controls.name.controls.last.pristine" class="alert alert-danger">
                            Please fix errors
                        </div-->
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!form1.valid" (click)="submitForm1()">Submit</button>
            </form>
            Submitted: {{ form1Model | json }}
        </div>
    `,
    directives: [REACTIVE_FORM_DIRECTIVES],
    styles: [`
        .ng-valid[required] {
            border-left: 5px solid #42A948; /* green */
        }
        .ng-invalid {
            border-left: 5px solid #a94442; /* red */
        }
`]
})
export class FormsExamplesComponent implements OnInit {
    form1Model: any;
    form1: FormGroup;
    
    constructor(private _builder: FormBuilder) { }

    ngOnInit() { 
        this.form1 = this._builder.group({
            name: this._builder.group({
                first: ['John', Validators.compose([Validators.required, Validators.minLength(3)])],
                last: ['Doe', Validators.compose([Validators.required, Validators.minLength(3)])]
            })
        });

        this.form1.statusChanges.subscribe(status => console.debug(status, this.form1));
    }

    private submitForm1(): void {
        this.form1Model = this.form1.value;
    }
}