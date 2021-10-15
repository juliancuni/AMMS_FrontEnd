import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { MenuService } from './services/menu.service';
import { SettingsService } from './services/settings.service';
import { ToastrModule } from 'ngx-toastr';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    ToastrModule.forRoot(),
    FormlyModule.forRoot({
      extras: { lazyRender: true },
      validationMessages: [{ name: 'required', message: 'S\'mund te lihet bosh' },],
    }),
    FormlyBootstrapModule,

  ],
  providers: [
    MenuService,
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
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule
    }
  }
}
