import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { INdermarrje } from 'src/app/shared/appwritesdk/models/ndermarrje.interface';
import { createNdermarrje, updateNdermarrje } from 'src/app/shared/store/actions/ndermarrje.actions';
import { NdermarrjeState } from 'src/app/shared/store/reducers/ndermarrje.reducer';

@Component({
    selector: 'app-ndermarrje-modal',
    templateUrl: './ndermarrje-modal.component.html',
    styleUrls: ['./ndermarrje-modal.component.scss']
})
export class NdermarrjeModalComponent implements OnInit {

    ndermarrjeForm = new FormGroup({});
    options: FormlyFormOptions = {}
    fields: FormlyFieldConfig[] = [{
        fieldGroup: [
            {
                key: 'emri',
                type: 'input',
                modelOptions: {
                    updateOn: 'submit',
                },
                templateOptions: {
                    type: 'text',
                    label: 'Emri i ndermarrjes',
                    placeholder: 'Emri i ndermarrjes',
                    required: true,
                }
            },
            {
                key: 'nius',
                type: 'input',
                modelOptions: {
                    updateOn: 'submit',
                },
                templateOptions: {
                    type: 'text',
                    label: 'NIUS',
                    placeholder: 'K0123456789W',
                    required: true,
                }
            },
            {
                key: 'email',
                type: 'input',
                modelOptions: {
                    updateOn: 'submit',
                },
                validators: {
                    validation: ['email'],
                },
                templateOptions: {
                    type: 'email',
                    label: 'Email',
                    placeholder: 'email@domain.al',
                    required: true,
                }

            },
            {
                key: 'tel',
                type: 'input',
                modelOptions: {
                    updateOn: 'submit',
                },
                templateOptions: {
                    type: 'text',
                    label: 'Telefon',
                    placeholder: '065 12 34 567',
                    required: true,
                }

            },
            // {
            //     key: 'logo',
            //     type: 'file',
            //     templateOptions: {
            //         type: 'file',
            //         label: 'Logo ',
            //     }
            // },
            {
                key: 'adresa',
                type: 'input',
                modelOptions: {
                    updateOn: 'submit',
                },
                templateOptions: {
                    type: 'text',
                    label: 'Adresa e subjektit',
                    placeholder: 'Tirane 1001, Rruga, Nr',
                    required: true,
                }
            },
            {
                key: 'website',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Web',
                    placeholder: 'https://domain.al',
                }
            },
        ],
    }];
    ndermarrjeModel: any = {};
    title?: string;
    closeBtnName?: string = "Mbyll";
    submitBtnName?: string = "Ruaj";
    ndermarrje?: INdermarrje;

    mode?: 'create' | 'update';

    constructor(
        public bsModalRef: BsModalRef,
        private readonly _store: Store<NdermarrjeState>
    ) {
    }

    submitNewNdermarrje() {
        if (this.ndermarrjeForm.valid) {
            if (this.ndermarrjeForm.touched) {
                if (this.mode === 'create') this._store.dispatch(createNdermarrje({ ndermarrje: this.ndermarrjeModel! }));
                if (this.mode === 'update') this._store.dispatch(updateNdermarrje({ ndermarrje: this.ndermarrjeModel! }));
            }
            this.bsModalRef.hide();
        }
    }

    ngOnInit(): void {
        if (this.mode === 'create') {
            this.title = "Krijo Ndermarrje te Re"
        }
        if (this.mode === 'update') {
            this.title = this.ndermarrje?.emri;
            this.ndermarrjeModel = { ...this.ndermarrje! }
        }
    }

}
