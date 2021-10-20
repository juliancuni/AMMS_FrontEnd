import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import {
    createEmailVerification,
    login,
    loginSuccess,
    logout,
    logoutSuccess,
    saveToLocalStorage,
    signUp,
    updateEmailVerification,
    whoAmI,
    whoAmIFailure,
    whoAmISuccess
} from '../actions/auth.actions';
import { toastrError, toastrSuccess } from '../actions/ui.actions';
import { AccountApi } from '../../appwritesdk/api/account.api';


@Injectable()
export class AuthEffects {

    login$ = createEffect(() => this.actions$.pipe(
        ofType(login),
        exhaustMap(({ email, password }) =>
            this._accountService.login(email, password).pipe(
                concatMap((_) => {
                    this._router.navigateByUrl("/app");
                    return [
                        loginSuccess(),
                    ]
                }),
                catchError((error) => { return of(toastrError({ error: error.message })) })
            )
        )
    ))

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(logout),
        exhaustMap(() => this._accountService.logout().pipe(
            map(() => {
                this._router.navigateByUrl("/login");
                localStorage.removeItem('account');
                return logoutSuccess();
            }),
            catchError((error) => { return of(toastrError({ error: error.message })) })
        ))
    ))

    signUp$ = createEffect(() => this.actions$.pipe(
        ofType(signUp),
        exhaustMap(({ email, password, name }) => this._accountService.signUp(email, password, name).pipe(
            concatMap((res) => {
                return [
                    login({ email, password }),
                    toastrSuccess({ msg: { message: "Mireseerdhet " + res.name, statusCode: 201 } }),
                ];
            }),
            catchError((error) => {
                return of(toastrError({ error: error.message }))
            })
        ))
    ))

    whoAmI$ = createEffect(() => this.actions$.pipe(
        ofType(whoAmI),
        switchMap(() => this._accountService.whoAmI().pipe(
            concatMap((account) => {
                return [
                    whoAmISuccess({ loggedInAccount: account }),
                    saveToLocalStorage({ loggedInAccount: account })
                ]

            }),
            catchError((error) => {
                localStorage.removeItem('account');
                this._router.navigateByUrl('/login')
                return of(whoAmIFailure())
            })
        ))
    ))

    saveToLocalStorage$ = createEffect(() => this.actions$.pipe(
        ofType(saveToLocalStorage),
        tap(({ loggedInAccount }) => {
            localStorage.setItem('account', JSON.stringify(loggedInAccount));
            this._router.navigateByUrl("/app");
        })
    ), { dispatch: false });


    createEmailVerification$ = createEffect(() => this.actions$.pipe(
        ofType(createEmailVerification),
        tap(() => this._accountService.createVerification().pipe(map((res) => {
            this._router.navigateByUrl('/email-verification')
        })),

        )
    ), { dispatch: false })

    updateEmailVerification$ = createEffect(() => this.actions$.pipe(
        ofType(updateEmailVerification),
        tap(({ userId, secret }) => this._accountService.updateVerification(userId, secret))
    ), { dispatch: false })

    constructor(
        private actions$: Actions,
        private readonly _router: Router,
        private readonly _accountService: AccountApi,
    ) { }

}
