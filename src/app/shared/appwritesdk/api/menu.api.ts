import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ApiHelper } from '../api.helper';
import { IDocList } from '../models/doc_list.interface';
import { IMenu } from '../models/menu.interface';

@Injectable({ providedIn: 'root' })

export class MenuApi {
    private menuCollectionId = "6163ffaeb6107"
    constructor() { }

    getMenus(): Observable<IDocList> {
        return from(ApiHelper.provider().database.listDocuments(this.menuCollectionId) as Promise<IDocList>)
    }

    updateMenus(menu: IMenu): Observable<any> {
        return from(ApiHelper.provider().database.updateDocument(this.menuCollectionId, menu.$id!, menu) as Promise<any>)
    }
}