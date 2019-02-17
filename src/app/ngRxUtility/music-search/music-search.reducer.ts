import { MusicSearchActions, MusicSearchActionType } from './music-search.actions';
import { albumAdapter, AlbumState, IAlbumState } from './music-search.store';


const fetchAlbums = (state, action) => {
    const { items } = action.payload;

    console.log('[fetchAlbums] state', state)
    console.log('action.payload', action.payload);

    return albumAdapter.addAll(items, state);
};

const searchAlbum = (state, action) => {
    console.log('[searchAlbum] state', state);


    return state;
};

export const musicSearchReducer = (state = AlbumState, action: MusicSearchActions): IAlbumState => {
    const payload = {
        [MusicSearchActionType.fetchAlbums]: fetchAlbums,
        // [MusicSearchActionType.searchAlbum]: searchAlbum
    };

    return (payload[action.type] || (() => state))(state, action);
};
