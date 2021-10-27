import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiHelper } from '../../helpers/api.helper';
import { IDocList } from '../models/doc_list.interface';
import { IMenu } from '../models/menu.interface';

@Injectable({ providedIn: 'root' })

export class MenuApi {
    private menuCollectionId = "6163ffaeb6107"
    constructor() { }

    getMenus(): Observable<IMenu[]> {
        return from(ApiHelper.provider().database.listDocuments(this.menuCollectionId) as Promise<IDocList>).pipe(
            map((docList: IDocList) => docList.documents as IMenu[])
        )
    }

    updateMenus(menu: IMenu): Observable<any> {
        return from(ApiHelper.provider().database.updateDocument(this.menuCollectionId, menu.$id!, menu) as Promise<any>)
    }
}