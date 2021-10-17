import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ApiHelper } from '../../helpers/api.helper';
import { IDocList } from '../models/doc_list.interface';
import { INdermarrja } from '../models/ndermarrja.interface';

@Injectable({ providedIn: 'root' })

export class NdermarrjeApi {
    private ndermarrjeCollectionId = "6163f8e1a0dec"
    constructor() { }

    insertNdermarrje(ndermarrja: INdermarrja) {
        return from(ApiHelper.provider().database.createDocument(this.ndermarrjeCollectionId, ndermarrja) as Promise<any>)
    }

    getNdermarrje(): Observable<IDocList> {
        return from(ApiHelper.provider().database.listDocuments(this.ndermarrjeCollectionId) as Promise<IDocList>)
    }

    updateNdermarrje(ndermarrja: INdermarrja): Observable<any> {
        return from(ApiHelper.provider().database.updateDocument(this.ndermarrjeCollectionId, ndermarrja.$id!, ndermarrja) as Promise<any>)
    }
}