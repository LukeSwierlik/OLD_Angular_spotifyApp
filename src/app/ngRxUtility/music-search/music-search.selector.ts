import { albumAdapter, IAlbumState } from './music-search.store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAlbumState = createFeatureSelector<IAlbumState>('musicSearch');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = albumAdapter.getSelectors();

export const selectAlbumIds = createSelector(
    selectAlbumState,
    selectIds
);

export const selectAlbumEntities = createSelector(
    selectAlbumState,
    selectEntities
);

export const selectAllAlbum = createSelector(
    selectAlbumState,
    (state: any) => selectAll(state)
);

