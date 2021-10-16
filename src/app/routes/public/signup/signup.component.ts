import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { signUp } from 'src/app/shared/store/actions/auth.actions';
import { AuthState } from 'src/app/shared/store/reducers/auth.reducer';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    signupForm = new FormGroup({});
    signupModel = {
        name: '',
        email: environment.production ? '' : '',
        password: environment.production ? '' : '',
        passwordConfirm: ''
    };

    options = {}
    fields: FormlyFieldConfig[] = [{
        validators: {
            validation: [
                { name: 'fieldMatch', options: { errorPath: 'passwordConfirm' } },
            ],
        },
        fieldGroup: [
            {
                key: 'name',
                type: 'input',
                modelOptions: {
                    updateOn: 'submit',
                },
                templateOptions: {
                    type: 'text',
                    label: 'Emri i Plote',
                    placeholder: 'Emer - Mbiemer',
                    required: true,
                }
            },
            {
                key: 'email',
                type: 'input',
                modelOptions: {
                    updateOn: 'submit',
                },
                validators: {
                    validation: ['email'],
                },
                templateOptions: {
                    type: 'email',
                    label: 'Email',
                    placeholder: 'email@domain.al',
                    required: true,
                }
            },
            {
                key: 'password',
                type: 'input',
                modelOptions: {
                    updateOn: 'submit',
                },
                templateOptions: {
                    type: 'password',
                    label: 'Fjalekalimi',
                    placeholder: 'Fjalekalimi te pakten 6 karaktere',
                    minLength: 6,
                    maxLength: 32,
                    required: true,
                },
            },
            {
                key: 'passwordConfirm',
                type: 'input',
                modelOptions: {
                    updateOn: 'submit',
                },
                templateOptions: {
                    type: 'password',
                    label: 'Konfirmo Fjalekalimin',
                    placeholder: 'Perserisni fjalekalimin',
                    required: true,
                },
            },
        ],
    }];

    constructor(
        private readonly _store: Store<AuthState>
    ) {
    }

    submitSignup() {

        if (this.signupForm.valid) {
            console.log(this.signupModel)
            const { name, email, password } = this.signupModel
            this._store.dispatch(signUp({ name, email, password }))
        }


    }

    ngOnInit() {
    }
}



