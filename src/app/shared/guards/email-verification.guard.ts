import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAccount } from '../appwritesdk/models/account.interface';
import { AuthState } from '../store/reducers/auth.reducer';
import { thisUser } from '../store/selectors/auth.selectors';

@Injectable({
    providedIn: 'root'
})
export class EmailVerificationGuard implements CanActivate {

    constructor(
        private readonly _store: Store<AuthState>,
        private readonly _router: Router,
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this._store.pipe(select(thisUser),
            map((loggedInAccount) => {
                if (!loggedInAccount?.emailVerification) {
                    this._router.navigateByUrl('/email-verification');
                    return false;
                }
                return true;
            })
        )
    }
}
