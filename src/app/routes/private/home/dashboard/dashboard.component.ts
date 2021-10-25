import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INdermarrje } from 'src/app/shared/appwritesdk/models/ndermarrje.interface';
import { AppState } from 'src/app/shared/store';
import { setUserPrefs } from 'src/app/shared/store/actions/user.actions';
import { selectAllNdermarrje } from 'src/app/shared/store/selectors/ndermarrje.selectors';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor(
        private readonly _store: Store<AppState>,
    ) {
    }

    resetPrefs() {
        this._store.dispatch(setUserPrefs({userPrefs: {}}))
    }

    ngOnInit(): void {

    }

}
