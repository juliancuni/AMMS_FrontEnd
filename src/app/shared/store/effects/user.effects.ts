import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, exhaustMap, map } from 'rxjs/operators';
import { UserApi } from '../../appwritesdk/api/user.api';
import { whoAmI } from '../actions/auth.actions';
import { toastrError, toastrWarning } from '../actions/ui.actions';
import {
    addNewUser,
    addNewUserSuccess,
    deleteUser,
    deleteUserSuccess,
    getUsers,
    getUsersFailure,
    getUsersSuccess,
    setUserPrefs,
    setUserPrefsSuccess,
    updateUser,
    updateUserSuccess
} from '../actions/user.actions';

@Injectable()
export class UserEffects {

    getUsers$ = createEffect(() => this.actions$.pipe(
        ofType(getUsers),
        exhaustMap(() => this._userService.getUsers().pipe(
            map((res) => getUsersSuccess({ users: res.documents }))
        )),
        catchError((err) => of(toastrError({ error: err.message })))
    ))

    setUserPrefs$ = createEffect(() => this.actions$.pipe(
        ofType(setUserPrefs),
        exhaustMap(({ userPrefs }) => this._userService.setUserPrefs(userPrefs).pipe(
            map((res) => {
                return whoAmI()
            }),
        )),
        catchError((err) => of(toastrError({ error: err })))
    ))

    constructor(
        private actions$: Actions,
        private readonly _userService: UserApi,
    ) { }

}