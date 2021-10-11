import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ApiHelper } from '../api.helper';
import { IAppSession } from '../models/session.interface';
import { IAccount } from '../models/account.interface';

@Injectable({ providedIn: 'root' })
export class AccountApi {

    constructor() { }

    login(email: string, password: string): Observable<IAppSession> {
        return from(ApiHelper.provider()?.account.createSession(email, password) as Promise<IAppSession>);
    }

    logout() {
        return from(ApiHelper.provider().account.deleteSession('current'));
    }

    signUp(account: IAccount) {

    }

    whoAmI(): Observable<IAccount> {
        return from(ApiHelper.provider().account.get() as Promise<IAccount>);
    }
}