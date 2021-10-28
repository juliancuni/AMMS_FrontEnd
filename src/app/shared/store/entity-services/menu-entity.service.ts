import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, HttpUrlGenerator, Logger } from '@ngrx/data';
import { Observable } from 'rxjs';
import { MenuApi } from '../../appwritesdk/api/menu.api';
import { IMenu } from '../../appwritesdk/models/menu.interface';

export const menuKey: string = 'Menu'; 

@Injectable()
export class MenuEntityService extends EntityCollectionServiceBase<IMenu> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory,) {
        super(menuKey, serviceElementFactory);
    }
}


@Injectable()
export class MenuDataService extends DefaultDataService<IMenu> {

    constructor(
        readonly http: HttpClient,
        readonly httpUrlGenerator: HttpUrlGenerator,
        private readonly logger: Logger,
        private readonly _menuApi: MenuApi,
    ) {

        super(menuKey, http, httpUrlGenerator)
    }
    getAll(): Observable<IMenu[]> {
        return this._menuApi.getMenus();
    }
    
}