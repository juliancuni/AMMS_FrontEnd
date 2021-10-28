import { Injectable } from '@angular/core';
import { Update } from '@ngrx/entity';
import { from, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiHelper } from '../../helpers/api.helper';
import { INdermarrje, IDocList } from '../models';

@Injectable({ providedIn: 'root' })

export class NdermarrjeApi {
    private ndermarrjeCollectionId = "6163f8e1a0dec"
    constructor() { }

    createNdermarrje(ndermarrje: INdermarrje) {
        return from(ApiHelper.provider().database.createDocument(this.ndermarrjeCollectionId, ndermarrje) as Promise<any>)
    }

    getNdermarrje(): Observable<INdermarrje[]> {
        return from(ApiHelper.provider().database.listDocuments(this.ndermarrjeCollectionId) as Promise<IDocList>).pipe(
            map((docList: IDocList) => docList.documents as INdermarrje[])
        )
    }

    updateNdermarrje(ndermarrje: Update<INdermarrje>): Observable<any> {
        return from(ApiHelper.provider().database.updateDocument(this.ndermarrjeCollectionId, ndermarrje.id as string, ndermarrje.changes) as Promise<any>)
    }

    deleteNdermarrje(id: string): Observable<string> {
        return from(ApiHelper.provider().database.deleteDocument(this.ndermarrjeCollectionId, id) as Promise<any>).pipe(
            map((_) => id),
            catchError((err) => err as string)
        )
    }
}