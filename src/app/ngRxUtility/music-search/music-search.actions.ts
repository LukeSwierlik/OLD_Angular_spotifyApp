import { Action } from '@ngrx/store';

export enum MusicSearchActionType {
    fetchAlbums = '[Music Search Component] fetchAlbums',
    searchAlbum = '[Music Search Component] searchAlbum'
}

export class FetchAlbums implements Action {
    readonly type = MusicSearchActionType.fetchAlbums;

    constructor(public payload: any) {}
}


export class SearchAlbum implements Action {
    readonly type = MusicSearchActionType.searchAlbum;

    constructor(public payload: string) {}
}

export type MusicSearchActions = FetchAlbums | SearchAlbum;
