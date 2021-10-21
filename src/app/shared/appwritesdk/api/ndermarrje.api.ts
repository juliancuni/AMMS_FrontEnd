import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ApiHelper } from '../../helpers/api.helper';
import { IDocList } from '../models/doc_list.interface';
import { INdermarrje } from '../models/ndermarrje.interface';

@Injectable({ providedIn: 'root' })

export class NdermarrjeApi {
    private ndermarrjeCollectionId = "6163f8e1a0dec"
    constructor() { }

    insertNdermarrje(ndermarrje: INdermarrje) {
        return from(ApiHelper.provider().database.createDocument(this.ndermarrjeCollectionId, ndermarrje) as Promise<any>)
    }

    getNdermarrje(): Observable<IDocList> {
        return from(ApiHelper.provider().database.listDocuments(this.ndermarrjeCollectionId) as Promise<IDocList>)
    }

    updateNdermarrje(ndermarrje: INdermarrje): Observable<any> {
        return from(ApiHelper.provider().database.updateDocument(this.ndermarrjeCollectionId, ndermarrje.$id!, ndermarrje) as Promise<any>)
    }
}