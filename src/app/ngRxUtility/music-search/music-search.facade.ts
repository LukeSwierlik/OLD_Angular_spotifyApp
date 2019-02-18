import { select, Store } from '@ngrx/store';
import { IAlbumState } from './music-search.store';
import { SearchAlbum } from './music-search.actions';
import * as SelectorsMusicAlbum from '../../ngRxUtility/music-search/music-search.selector';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import IAlbum from '../../shared/interface/album.interface';

@Injectable()
export class MusicSearchFacade {
    readonly albums$: Observable<IAlbum[]> = this.store
        .pipe(select(SelectorsMusicAlbum.selectAllAlbum));

    constructor(private store: Store<IAlbumState>) {}

    getAlbums(query: string) {
        this.store.dispatch(new SearchAlbum(query));
    }
}
