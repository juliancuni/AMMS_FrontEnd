import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AppState } from 'src/app/shared/store';
import { login, logout } from 'src/app/shared/store/actions/auth.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({});
  loginModel = { email: environment.production ? '' : 'juliancuni@gmail.com', password: environment.production ? '' : '36638833' };
  options = {}
  fields: FormlyFieldConfig[] = [
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
        label: 'Password',
        placeholder: 'Password',
        minLength: 6,
        maxLength: 32,
        required: true,
      }
    }]

  constructor(
    private readonly _store: Store<AppState>,
  ) {
  }

  submitLogin($ev: any) {
    $ev.preventDefault();
    for (let c in this.loginForm.controls) {
      this.loginForm.controls[c].markAsTouched();
    }
    if (this.loginForm.valid) {
      this._store.dispatch(login(this.loginModel))
    }
  }

  ngOnInit() { }

}
