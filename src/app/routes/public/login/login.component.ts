import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store';
import { login, logout } from 'src/app/shared/store/actions/auth.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  valForm: FormGroup;

  constructor(
    public readonly fb: FormBuilder,
    private readonly _store: Store<AppState>,
  ) {
    this.valForm = fb.group({
      'email': [environment.production ? null : 'julian.cuni@microservices.al', Validators.compose([Validators.required])],
      'password': [environment.production ? null : '36638833', Validators.required]
    });
  }

  submitLogin($ev: any, value: any) {
    $ev.preventDefault();
    for (let c in this.valForm.controls) {
      this.valForm.controls[c].markAsTouched();
    }
    if (this.valForm.valid) {
      const { email, password } = this.valForm.value;
      this._store.dispatch(login({ email, password }))
    }
  }

  logout() {
    this._store.dispatch(logout());
  }

  ngOnInit() { }

}
