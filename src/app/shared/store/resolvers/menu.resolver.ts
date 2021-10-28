import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { MenuEntityService } from '../entity-services/menu-entity.service';


@Injectable()
export class MenuResolver implements Resolve<boolean> {

    constructor(
        private readonly _menuStore: MenuEntityService,
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this._menuStore.loaded$.pipe(
            tap(loaded => {
                if (!loaded) this._menuStore.getAll();
            }),
            filter(loaded => !!loaded),
            first(),
        )
    }
}
