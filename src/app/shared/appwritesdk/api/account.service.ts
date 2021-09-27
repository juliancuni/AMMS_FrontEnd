import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ApiHelper } from '../api.helper';
import { AppSession } from '../models/session.type';
import { Account } from '../models/account.type';

@Injectable({ providedIn: 'root' })
export class AccountService {

    constructor() { }

    login(email: string, password: string): Observable<AppSession> {
        return from(ApiHelper.provider()?.account.createSession(email, password) as Promise<AppSession>);
    }

    logout() {
        return from(ApiHelper.provider().account.deleteSession('current'));
    }

    signUp(account: Account) {

    }

    whoAmI(): Observable<Account> {
        return from(ApiHelper.provider().account.get() as Promise<Account>);
    }

}