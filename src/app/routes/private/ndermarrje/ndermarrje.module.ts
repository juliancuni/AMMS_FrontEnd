import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NdermarrjeListComponent } from './ndermarrje-list/ndermarrje-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NdermarrjeModalComponent } from './ndermarrje-modal/ndermarrje-modal.component';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { NdermarrjeDataService, NdermarrjeEntityService } from 'src/app/shared/store/entity-services/ndermarrje-entity.service';
import { INdermarrje } from 'src/app/shared/appwritesdk/models';
import { NdermarrjeResolver } from 'src/app/shared/store/resolvers/ndermarrje.resolver';

const routes: Routes = [
  { path: '', component: NdermarrjeListComponent }
]

const entityMetadata: EntityMetadataMap = {
  Ndermarrje: {
    // entityName: 'Ndermarrje',
    selectId: (ndermarrje: INdermarrje) => ndermarrje.$id!,
    entityDispatcherOptions: {
      optimisticAdd: false,
      optimisticSaveEntities: false,
      optimisticDelete: false,
      optimisticUpdate: false,
      optimisticUpsert: false
    }
  },
}

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
  ],
  providers: [
    NdermarrjeResolver,
    NdermarrjeDataService,
    NdermarrjeEntityService,
  ]
})
export class NdermarrjeModule {
  constructor(
    eds: EntityDefinitionService,
    entityDataService: EntityDataService,
    ndermarrjeDataService: NdermarrjeDataService,

  ) {
    eds.registerMetadataMap(entityMetadata)
    entityDataService.registerService('Ndermarrje', ndermarrjeDataService);
  }
}
