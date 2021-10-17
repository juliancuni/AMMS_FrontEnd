import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createEmailVerification, logout } from 'src/app/shared/store/actions/auth.actions';
import { AuthState } from 'src/app/shared/store/reducers/auth.reducer';
import { isAuthenticated, thisUser } from 'src/app/shared/store/selectors/auth.selectors';

@Component({
    selector: 'app-email-verification',
    templateUrl: './email-verification.component.html',
    styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {

    isAuthenticated$: Observable<boolean>;

    constructor(
        private readonly _store: Store<AuthState>,
        private readonly _router: Router
    ) {
        this.isAuthenticated$ = this._store.pipe(select(isAuthenticated));
        this.resend();
    }

    resend() {
        this._store.dispatch(createEmailVerification())
    }

    login() {
        return this._store.dispatch(logout())
    }

    ngOnInit(): void {
        // this._store.dispatch(createEmailVerification())
    }

}
