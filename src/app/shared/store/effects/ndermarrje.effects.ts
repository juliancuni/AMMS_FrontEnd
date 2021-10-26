import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { toastrError, toastrSuccess } from '../actions/ui.actions';

import { NdermarrjeApi } from '../../appwritesdk/api/ndermarrje.api';
import { createNdermarrje, createNdermarrjeSuccess, deleteNdermarrje, deleteNdermarrjeSuccess, getNdermarrjet, getNdermarrjetSuccess, updateNdermarrje, updateNdermarrjeSuccess, zgjidhNdermarrje } from '../actions/ndermarrje.actions';
import { INdermarrje } from '../../appwritesdk/models/ndermarrje.interface';
import { Update } from '@ngrx/entity';


@Injectable()
export class NdermarrjeEffects {

    getNdermarrje$ = createEffect(() => this.actions$.pipe(
        ofType(getNdermarrjet),
        exhaustMap(() => this._ndermarrjeervice.getNdermarrje().pipe(
            map((res) => {
                return getNdermarrjetSuccess({ ndermarrjet: res.documents })
            }),
            catchError((error) => {
                console.log(error.message)
                return of(toastrError({ error: error.message }))
            })
        ))
    ))

    deleteNdermarrje$ = createEffect(() => this.actions$.pipe(
        ofType(deleteNdermarrje),
        exhaustMap(({ id }) => this._ndermarrjeervice.deleteNdermarrje(id).pipe(
            map((_) => {
                return deleteNdermarrjeSuccess({ id: id })
            }),
            catchError((error) => {
                console.log(error);
                return of(toastrError({ error: error }))
            })
        ))
    ))

    createNdermarrje$ = createEffect(() => this.actions$.pipe(
        ofType(createNdermarrje),
        switchMap(({ ndermarrje }) => this._ndermarrjeervice.insertNdermarrje(ndermarrje).pipe(
            concatMap((res: INdermarrje) => {
                const msg = { code: res.emri, message: res.emri + " u regjistrua me sukses!" }
                return [
                    toastrSuccess({ msg }),
                    createNdermarrjeSuccess({ ndermarrje: res })
                ]
            }),
            catchError((error) => {
                console.log(error)
                return of(toastrError({ error: error }))
            })
        ))
    ))

    updateNdermarrje$ = createEffect(() => this.actions$.pipe(
        ofType(updateNdermarrje),
        switchMap(({ ndermarrje }) => {

            return this._ndermarrjeervice.updateNdermarrje(ndermarrje).pipe(
                map((res: INdermarrje) => {
                    const updated: Update<INdermarrje> = {
                        id: res.$id as string, changes: {
                            ...res
                        }
                    }
                    return updateNdermarrjeSuccess({ update: updated })
                }),
                catchError((err) => {
                    console.log(err)
                    return of(toastrError({ error: err }))
                })
            )
        })
    ))

    constructor(
        private actions$: Actions,
        private readonly _router: Router,
        private readonly _ndermarrjeervice: NdermarrjeApi,
    ) { }

}
