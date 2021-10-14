import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateEmailVerification } from 'src/app/shared/store/actions/auth.actions';
import { AuthState } from 'src/app/shared/store/reducers/auth.reducer';

@Component({
    selector: 'app-email-verify',
    templateUrl: './email-verify.component.html',
    styleUrls: ['./email-verify.component.scss']
})
export class EmailVerifyComponent implements OnInit {

    constructor(
        private readonly _route: ActivatedRoute,
        private readonly _router: Router,
        private readonly _store: Store<AuthState>,
    ) { }

    ngOnInit(): void {
        this._route.queryParams.subscribe(params => {
            const { expire, userId, secret } = params;
            if (expire < (Date.now() / 1000)) {
                alert("Ky link ka skaduar")
                this._router.navigateByUrl("/login")
            } else {
                this._store.dispatch(updateEmailVerification({ userId, secret }))
            }
        }
        );
    }

}
