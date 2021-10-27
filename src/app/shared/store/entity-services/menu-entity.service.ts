import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, HttpUrlGenerator, Logger } from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuApi } from '../../appwritesdk/api/menu.api';
import { IDocList } from '../../appwritesdk/models/doc_list.interface';
import { IMenu } from '../../appwritesdk/models/menu.interface';

@Injectable({ providedIn: 'root' })
export class MenuEntityService extends EntityCollectionServiceBase<IMenu> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory,) {
        super('Menu', serviceElementFactory);
    }
}


@Injectable({ providedIn: 'root' })
export class MenuDataService extends DefaultDataService<IMenu> {

    constructor(
        readonly http: HttpClient,
        readonly httpUrlGenerator: HttpUrlGenerator,
        private readonly logger: Logger,
        private readonly _menuApi: MenuApi,
    ) {

        super('Menu', http, httpUrlGenerator)
    }
    getAll(): Observable<IMenu[]> {
        this.logger.error("test")
        return this._menuApi.getMenus();
    }
}