import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { IMenu } from '../../appwritesdk/models';

export const menuEntityMetadata: EntityMetadataMap = {
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
};

const pluralNames = {
    // Menu: 'Menute',
};

export const menuEntityConfig: EntityDataModuleConfig = {
    entityMetadata: menuEntityMetadata,
    pluralNames
};
