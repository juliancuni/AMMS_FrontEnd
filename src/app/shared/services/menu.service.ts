import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMenu } from '../appwritesdk/models/menu.interface';
import { getMenus } from '../store/actions/menu.actions';
import { MenuState } from '../store/reducers/menu.reducer';
import { selectAllMenus } from '../store/selectors/menu.selectors';

@Injectable()
export class MenuService {


    menuItems: Array<any>;
    menuItems$: Observable<IMenu[]>
    constructor(
        private readonly _store: Store<MenuState>,
    ) {
        this.menuItems$ = this._store.pipe(select(selectAllMenus))
        this.menuItems = [];

    }

    // addMenu(items: Array<{
    //     text: string,
    //     heading?: boolean,
    //     link?: string,     // internal route links
    //     elink?: string,    // used only for external links
    //     target?: string,   // anchor target="_blank|_self|_parent|_top|framename"
    //     icon?: string,
    //     alert?: string,
    //     submenu?: Array<any>
    // }>) {
    //     items.forEach((item) => {
    //         this.menuItems.push(item);
    //     });
    // }

    getMenu$(): Observable<IMenu[]> {
        return this.menuItems$
    }

    getMenu() {
        return this.menuItems;
    }

}
