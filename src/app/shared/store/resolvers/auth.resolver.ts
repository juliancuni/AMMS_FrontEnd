import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';
import { Observable } from 'rxjs';
import { finalize, first, map } from 'rxjs/operators';
import { loginSuccess, whoAmI } from '../actions/auth.actions';


@Injectable({ providedIn: 'root' })
export class AuthResolver implements Resolve<any> {

    private loading = false;

    constructor(
        private readonly _store: Store<AuthState>,
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this._store.pipe(
            map((store: any) => {
                if (!this.loading) {
                    if (!store.loggedInAccount) {
                        this.loading = true;
                        this._store.dispatch(whoAmI());
                    }
                }
            }),
            first(),
            finalize(() => this.loading = false)
        );
    }
}
