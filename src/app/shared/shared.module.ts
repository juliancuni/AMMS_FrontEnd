import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AppMenuHelper } from './services/menu.helper';
import { SettingsService } from './services/settings.service';
import { ToastrModule } from 'ngx-toastr';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { config, FileValueAccessor, FormlyFieldFile } from './helpers/formly.config'


@NgModule({
  declarations: [
    FormlyFieldFile,
    FileValueAccessor,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    ToastrModule.forRoot(),
    FormlyModule.forRoot(config),
    FormlyBootstrapModule,

  ],
  providers: [
    AppMenuHelper,
    SettingsService
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    ButtonsModule,
    ToastrModule,
    FormlyModule,
    FormlyBootstrapModule,
    FileValueAccessor,
    FormlyFieldFile
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule
    }
  }
}
