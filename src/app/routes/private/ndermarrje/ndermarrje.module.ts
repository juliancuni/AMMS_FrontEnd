import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NdermarrjeListComponent } from './ndermarrje-list/ndermarrje-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NdermarrjeModalComponent } from './ndermarrje-modal/ndermarrje-modal.component';

const routes: Routes = [
  { path: '', component: NdermarrjeListComponent }
]

@NgModule({
  declarations: [
    NdermarrjeListComponent,
    NdermarrjeModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NdermarrjeListComponent,
  ]
})
export class NdermarrjeModule { }
