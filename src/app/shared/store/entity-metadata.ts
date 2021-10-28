import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { IMenu, INdermarrje } from '../appwritesdk/models';

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
};

const pluralNames = {
    // Menu: 'Menute',
};

export const entityConfig: EntityDataModuleConfig = {
    entityMetadata,
    pluralNames
};