import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { INdermarrja } from 'src/app/shared/appwritesdk/models/ndermarrja.interface';
import { AppState } from 'src/app/shared/store';
import { selectAllNdermarrje } from 'src/app/shared/store/selectors/ndermarrja.selectors';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    ndermarrje$: Observable<INdermarrja[]>;

    constructor(
        private readonly _store: Store<AppState>,
    ) {
        this.ndermarrje$ = this._store.pipe(select(selectAllNdermarrje))
    }

    form = new FormGroup({});
    model = { email: 'email@gmail.com' };
    fields: FormlyFieldConfig[] = [
        {
            key: 'email',
            type: 'input',
            templateOptions: {
                type: 'email',
                // label: 'Email address',
                placeholder: 'Enter email',
                required: true,
            }
        },
        {
            key: 'password',
            type: 'input',
            templateOptions: {
                type: 'password',
                // label: 'Password',
                placeholder: 'Enter Password',
                required: true,
            }
        }
    ];

    onSubmit(model: any) {
        console.log(model);
    }

    ngOnInit(): void {
    }

}
