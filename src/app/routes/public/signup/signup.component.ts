import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    valForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private readonly _store: Store<AuthState>
    ) {
        this.valForm = fb.group({
            emriIPlote: ['Auiu LaverBariu', Validators.required],
            email: ['auiu@laverbariu.com', [Validators.required, Validators.email]],
            password: ['123456', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
            confirmPassword: ['123456', Validators.required],
        }, {
            validators: [Validation.match('password', 'confirmPassword')]
        });
    }

    get f(): { [key: string]: AbstractControl } {
        return this.valForm.controls;
    }

    submitForm($ev: any) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            let { email, password, emriIPlote } = this.valForm.value;
            this._store.dispatch(signUp({ email, password, name: emriIPlote }))
        }
    }

    ngOnInit() {
    }


}



import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signUp } from 'src/app/shared/store/actions/auth.actions';
import { AuthState } from 'src/app/shared/store/reducers/auth.reducer';

export default class Validation {

    static match(controlName: string, checkControlName: string): ValidatorFn {
        return (controls: AbstractControl) => {
            const control = controls.get(controlName);
            const checkControl = controls.get(checkControlName);

            if (checkControl!.errors && checkControl!.errors.matching) {
                return null;
            }

            if (control!.value !== checkControl!.value) {
                // @ts-ignore: Object is possibly 'null'.
                controls.get(checkControlName).setErrors({ matching: true });
                return { matching: true };
            } else {
                return null;
            }
        };
    }
}