import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { INdermarrje } from '../../appwritesdk/models';

export const ndermarrjeEntityMetadata: EntityMetadataMap = {
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
    // Ndermarrje: 'Ndermarrjet'
};

export const ndermarrjeEntityConfig: EntityDataModuleConfig = {
    entityMetadata: ndermarrjeEntityMetadata,
    pluralNames
};
