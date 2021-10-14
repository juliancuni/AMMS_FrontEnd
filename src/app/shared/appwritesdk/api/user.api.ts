import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ApiHelper } from '../api.helper';
import { IAppSession } from '../models/session.interface';
import { IAccount } from '../models/account.interface';

@Injectable({ providedIn: 'root' })
export class UserApi {

    private perdoruesitCollectionId = "6163f9c4f2c36"

    constructor() { }

    getUsers() {
        return from(ApiHelper.provider().database.listDocuments(this.perdoruesitCollectionId) as Promise<any>)
    }
}