import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from '../appwritesdk/models/menu.interface';

import { MenuEntityService } from '../store/entity-services/menu-entity.service'

@Injectable()
export class AppMenuHelper {

    menuItems$: Observable<IMenu[]>

    constructor(
        private readonly _menuStore: MenuEntityService,
    ) {
        this.menuItems$ = this._menuStore.entities$;
    }

    getMenu$(): Observable<IMenu[]> {
        return this.menuItems$
    }
}
