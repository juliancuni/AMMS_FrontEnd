// import { Injectable } from '@angular/core';
// import { from, Observable } from 'rxjs';
// import { ApiHelper } from '../../helpers/api.helper';
// import { IDocList } from '../models/doc_list.interface';
// import { ISektor } from '../models/sektor.interface';

// @Injectable({ providedIn: 'root' })

// export class SektorApi {
//     private sektorCollectionId = "6163f8e1a0dec"
//     constructor() { }

//     insertSektor(sektor: ISektor) {
//         return from(ApiHelper.provider().database.createDocument(this.sektorCollectionId, sektor) as Promise<any>)
//     }

//     getSektor(): Observable<IDocList> {
//         return from(ApiHelper.provider().database.listDocuments(this.sektorCollectionId) as Promise<IDocList>)
//     }

//     updateSektor(sektor: ISektor): Observable<any> {
//         return from(ApiHelper.provider().database.updateDocument(this.sektorCollectionId, sektor.$id!, sektor) as Promise<any>)
//     }

//     deleteSektor(id: string) {
//         return from(ApiHelper.provider().database.deleteDocument(this.sektorCollectionId, id) as Promise<any>)
//     }
// }