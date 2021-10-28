import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { INdermarrje } from 'src/app/shared/appwritesdk/models';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { NdermarrjeModalComponent } from '../ndermarrje-modal/ndermarrje-modal.component';
import { NdermarrjeEntityService } from 'src/app/shared/store/entity-services/ndermarrje-entity.service';

@Component({
  selector: 'app-ndermarrje-list',
  templateUrl: './ndermarrje-list.component.html',
  styleUrls: ['./ndermarrje-list.component.scss']
})
export class NdermarrjeListComponent implements OnInit {

  bsModalRef?: BsModalRef;
  modalMode?: 'create' | 'update';
  ndermarrjet$: Observable<INdermarrje[]> | undefined;
  ndermarrje?: INdermarrje;
  constructor(
    private readonly _modalService: BsModalService,
    private readonly _ndermarrjeStore: NdermarrjeEntityService
  ) { }

  regNderPrefs(ndermarrje: INdermarrje) {
    // this._store.dispatch(setUserPrefs({ userPrefs: { ndermarrje: ndermarrje.$id } }))
    // this._store.dispatch(zgjidhNdermarrje({ ndermarrje }))
  }

  newNdermarrje() {
    const initialState: ModalOptions = {
      initialState: {
        mode: 'create',
        ndermarrje: null,
      }
    }
    this.bsModalRef = this._modalService.show(NdermarrjeModalComponent, initialState);
  }

  edit(ndermarrje: INdermarrje,) {
    const initialState: ModalOptions = {
      initialState: {
        mode: 'update',
        ndermarrje: ndermarrje,
      }
    }
    this.bsModalRef = this._modalService.show(NdermarrjeModalComponent, initialState);
  }

  delete(template: TemplateRef<any>, ndermarrje: INdermarrje) {
    this.bsModalRef = this._modalService.show(template, { class: 'modal-sm' });
    this.ndermarrje = ndermarrje;
  }

  confirm(): void {
    this._ndermarrjeStore.delete(this.ndermarrje?.$id!)
    this.bsModalRef?.hide();
  }

  decline(): void {
    this.bsModalRef?.hide();
  }


  ngOnInit(): void {
    this.ndermarrjet$ = this._ndermarrjeStore.entities$;
  }

}
