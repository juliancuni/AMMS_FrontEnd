import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, HttpUrlGenerator, Logger } from '@ngrx/data';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { NdermarrjeApi } from '../../appwritesdk/api/ndermarrje.api';
import { INdermarrje } from '../../appwritesdk/models';

export const ndermarrjeKey: string = 'Ndermarrje';

@Injectable()
export class NdermarrjeEntityService extends EntityCollectionServiceBase<INdermarrje> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory,) {
        super(ndermarrjeKey, serviceElementFactory);
    }
}


@Injectable()
export class NdermarrjeDataService extends DefaultDataService<INdermarrje> {

    constructor(
        readonly http: HttpClient,
        readonly httpUrlGenerator: HttpUrlGenerator,
        private readonly logger: Logger,
        private readonly _ndermarrjeApi: NdermarrjeApi,
    ) {
        super(ndermarrjeKey, http, httpUrlGenerator)
    }

    getAll(): Observable<INdermarrje[]> {
        return this._ndermarrjeApi.getNdermarrje();
    }

    add(ndermarrje: INdermarrje): Observable<INdermarrje> {
        return this._ndermarrjeApi.createNdermarrje(ndermarrje);
    }

    delete(id: string): Observable<string> {
        return this._ndermarrjeApi.deleteNdermarrje(id);
    }

    update(ndermarrje: Update<INdermarrje>): Observable<INdermarrje> {
        return this._ndermarrjeApi.updateNdermarrje(ndermarrje);
    }

}