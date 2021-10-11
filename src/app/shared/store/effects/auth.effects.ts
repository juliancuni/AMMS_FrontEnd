import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { AuthenticationService, UsersCRUDService } from '../../sdk';
import { login, loginSuccess, logout, logoutSuccess, saveToLocalStorage, whoAmI, whoAmIFailure, whoAmISuccess } from '../actions/auth.actions';
import { toastrError } from '../actions/ui.actions';

import { AccountApi } from '../../appwritesdk/api/account.api';


@Injectable()
export class AuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    exhaustMap(({email, password}) =>
      this._accountService.login(email, password).pipe(
        concatMap((_) => {
          this._router.navigateByUrl("/app");
          return [
            loginSuccess(), 
            // whoAmI()
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

  whoAmI$ = createEffect(() => this.actions$.pipe(
    ofType(whoAmI),
    exhaustMap(() => this._accountService.whoAmI().pipe(
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

  // login$ = createEffect(() => this.actions$.pipe(
  //   ofType(login),
  //   exhaustMap(({ loginDto }) =>
  //     this._authService.authControllerLogin(loginDto).pipe(
  //       concatMap(token => {
  //         return [
  //           loginSuccess({ token }),
  //           saveToLocalStorage({ token })
  //         ]
  //       }),
  //       catchError(({ error }) => {
  //         console.log(error)
  //         if (!error.statusCode) error = { statusCode: "Error", message: "Server mund te jete down. Lajmero administratorin" }

  //         return of(toastrError({ error }))
  //       })
  //     )
  //   ))
  // );



  // logout$ = createEffect(() => this.actions$.pipe(
  //   ofType(logout),
  //   tap(() => {
  //     localStorage.removeItem('access_token');
  //     this._router.navigateByUrl("/login");
  //   })
  // ), { dispatch: false });


  // whoAmI$ = createEffect(() => this.actions$.pipe(
  //   ofType(whoAmI),
  //   concatMap(() => this._userService.usersControllerWhoAmI()),
  //   map((myUser) => {
  //     return whoAmISuccess({ myUser })
  //   }),
  //   catchError(error => {
  //     console.log(error)
  //     return of(toastrError({ error }))
  //   })
  // ));

  constructor(
    private actions$: Actions,
    private readonly _authService: AuthenticationService,
    private readonly _router: Router,
    private readonly _userService: UsersCRUDService,
    private readonly _accountService: AccountApi,
  ) { }

}
