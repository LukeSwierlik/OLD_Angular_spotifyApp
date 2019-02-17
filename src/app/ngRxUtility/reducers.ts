import { ActionReducerMap } from '@ngrx/store';
import { musicSearchReducer } from './music-search/music-search.reducer';
import { IAlbumState } from './music-search/music-search.store';

interface State {
    musicSearch: IAlbumState;
}

export const reducers: ActionReducerMap<State> = {
    musicSearch: musicSearchReducer
};
