import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { NdermarrjeEntityService } from '../entity-services/ndermarrje-entity.service';


@Injectable()
export class NdermarrjeResolver implements Resolve<boolean> {

    constructor(
        private readonly _nderMarrjeStore: NdermarrjeEntityService,
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this._nderMarrjeStore.loaded$.pipe(
            tap((loaded) => {
                if (!loaded) this._nderMarrjeStore.getAll();
            }),
            filter((loaded) => !!loaded),
            first(),
        );
    }
}
