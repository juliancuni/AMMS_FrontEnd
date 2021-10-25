import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { INdermarrje } from 'src/app/shared/appwritesdk/models/ndermarrje.interface';

@Component({
    selector: 'app-ndermarrje-modal',
    templateUrl: './ndermarrje-modal.component.html',
    styleUrls: ['./ndermarrje-modal.component.scss']
})
export class NdermarrjeModalComponent implements OnInit {

    ndermarrjeForm = new FormGroup({});
    ndermarrjeModel: INdermarrje = {
        emri: 'a',
        nius: 'b',
        adresa: 'c',
        tel: 'd',
        email: 'e',
        logo: 'f',
        website: 'g',
    };

    options = {}
    fields: FormlyFieldConfig[] = [{
        validators: {
            validation: [
                { name: 'fieldMatch', options: { errorPath: 'passwordConfirm' } },
            ],
        },
        fieldGroup: [
            {
                key: 'emri',
                type: 'input',
                modelOptions: {
                    updateOn: 'submit',
                },
                templateOptions: {
                    type: 'text',
                    label: 'Emri i Plote',
                    placeholder: 'Emer - Mbiemer',
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
                    label: 'nius',
                    placeholder: 'nius',
                    required: true,
                }
            },
            {
                key: 'adresa',
                type: 'input',
                modelOptions: {
                    updateOn: 'submit',
                },
                templateOptions: {
                    type: 'text',
                    label: 'adresa',
                    placeholder: 'adresa',
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
                key: 'logo',
                type: 'input',
                modelOptions: {
                    updateOn: 'submit',
                },
                templateOptions: {
                    type: 'text',
                    label: 'logo',
                    placeholder: 'logo',
                    required: true,
                }
            },
            {
                key: 'website',
                type: 'input',
                modelOptions: {
                    updateOn: 'submit',
                },
                templateOptions: {
                    type: 'text',
                    label: 'website',
                    placeholder: 'website',
                    required: true,
                }
            },
        ],
    }];

    title?: string;
    closeBtnName?: string;
    ndermarrje?: INdermarrje;
    mode?: 'create' | 'update';

    constructor(
        public bsModalRef: BsModalRef
    ) {
    }

    submitNdermarrje() {
        this.ndermarrjeForm.markAsTouched();
        (this.ndermarrjeForm as any).submitted = true;
        console.log(this.ndermarrjeForm.value)
    }

    ngOnInit(): void {
    }

}
