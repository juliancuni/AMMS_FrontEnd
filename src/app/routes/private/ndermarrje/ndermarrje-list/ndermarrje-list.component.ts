import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INdermarrje } from 'src/app/shared/appwritesdk/models/ndermarrje.interface';
import { AppState } from 'src/app/shared/store';
import { zgjidhNdermarrje } from 'src/app/shared/store/actions/ndermarrje.actions';
import { setUserPrefs } from 'src/app/shared/store/actions/user.actions';
import { selectNdermarrjet } from 'src/app/shared/store/selectors/ndermarrje.selectors';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { NdermarrjeModalComponent } from '../ndermarrje-modal/ndermarrje-modal.component';

@Component({
  selector: 'app-ndermarrje-list',
  templateUrl: './ndermarrje-list.component.html',
  styleUrls: ['./ndermarrje-list.component.scss']
})
export class NdermarrjeListComponent implements OnInit {

  bsModalRef?: BsModalRef;
  modalMode?: 'create' | 'update';
  ndermarrjet$: Observable<INdermarrje[]> | undefined;

  constructor(
    private readonly _store: Store<AppState>,
    private readonly _modalService: BsModalService
  ) { }

  regNderPrefs(ndermarrje: INdermarrje) {
    this._store.dispatch(setUserPrefs({ userPrefs: { ndermarrje: ndermarrje.$id } }))
    this._store.dispatch(zgjidhNdermarrje({ ndermarrje }))
  }

  newNdermarrje() {
    const initialState: ModalOptions = {
      initialState: {
        mode: 'create',
        title: 'Krijo Ndermarrje te Re'
      }
    }
    this.bsModalRef = this._modalService.show(NdermarrjeModalComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Mbyll';
  }


  ngOnInit(): void {
    this.ndermarrjet$ = this._store.pipe(select(selectNdermarrjet))
  }

}
