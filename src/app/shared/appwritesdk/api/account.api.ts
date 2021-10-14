import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ApiHelper } from '../api.helper';
import { IAppSession } from '../models/session.interface';
import { IAccount } from '../models/account.interface';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AccountApi {

    constructor() { }

    login(email: string, password: string): Observable<IAppSession> {
        return from(ApiHelper.provider()?.account.createSession(email, password) as Promise<IAppSession>);
    }

    logout() {
        return from(ApiHelper.provider().account.deleteSession('current'));
    }

    signUp(email: string, password: string, name: string) {
        return from(ApiHelper.provider().account.create(email, password, name) as Promise<any>);
    }

    createVerification() {
        return from(ApiHelper.provider().account.createVerification(environment.VERIFICATION_EMAIL_LINK) as Promise<any>)
    }

    updateVerification(userId: string, secret: string) {
        return from(ApiHelper.provider().account.updateVerification(userId, secret) as Promise<any>)
    }

    whoAmI(): Observable<IAccount> {
        return from(ApiHelper.provider().account.get() as Promise<IAccount>);
    }
}