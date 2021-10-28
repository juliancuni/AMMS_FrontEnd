import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateLayoutComponent } from './private-layout/private-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrivateHeaderComponent } from './private-header/private-header.component';
import { PrivateFooterComponent } from './private-footer/private-footer.component';
import { PrivateSidebarComponent } from './private-sidebar/private-sidebar.component';
import { PrivateOffsidebarComponent } from './private-offsidebar/private-offsidebar.component';
import { UserblockComponent } from './userblock/userblock.component';
import { EmailVerificationComponent } from 'src/app/routes/public/email-verification/email-verification.component';
import { NdermarrjeModule } from 'src/app/routes/private/ndermarrje/ndermarrje.module';
import { MenuDataService, MenuEntityService } from '../../shared/store/entity-services/menu-entity.service';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { IMenu } from 'src/app/shared/appwritesdk/models';
import { MenuResolver } from 'src/app/shared/store/resolvers/menu.resolver';


const entityMetadata: EntityMetadataMap = {
  Menu: {
    // entityName: 'Menu',
    selectId: (menu: IMenu) => menu.$id!,
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
    PrivateLayoutComponent,
    PrivateHeaderComponent,
    PrivateFooterComponent,
    PrivateSidebarComponent,
    PrivateOffsidebarComponent,
    UserblockComponent,
    EmailVerificationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NdermarrjeModule,
  ],
  exports: [
    PrivateLayoutComponent,
    PrivateHeaderComponent,
    PrivateFooterComponent,
    PrivateSidebarComponent,
    PrivateOffsidebarComponent
  ],
  providers: [
    MenuResolver,
    MenuDataService,
    MenuEntityService,
  ]
})
export class PrivateLayoutModule {

  constructor(
    eds: EntityDefinitionService,
    entityDataService: EntityDataService,
    menuDataService: MenuDataService,

  ) {
    eds.registerMetadataMap(entityMetadata)
    entityDataService.registerService('Menu', menuDataService);
  }
}
