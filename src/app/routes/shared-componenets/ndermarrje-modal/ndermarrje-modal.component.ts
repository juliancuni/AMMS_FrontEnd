import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-ndermarrje-modal',
    templateUrl: './ndermarrje-modal.component.html',
    styleUrls: ['./ndermarrje-modal.component.scss']
})
export class NdermarrjeModalComponent implements OnInit {

    title?: string;
    closeBtnName?: string;
    mode: 'update' | 'create';

    constructor(
        public bsModalRef: BsModalRef
    ) {
        this.mode = 'create';
    }

    ngOnInit(): void { }
}
