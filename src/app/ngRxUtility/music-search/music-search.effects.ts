import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FetchAlbums, MusicSearchActionType, SearchAlbum } from './music-search.actions';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MusicSearchEffects {
    private readonly defaultSearchValue = 'Batman';
    private readonly url = `https://api.spotify.com/v1/search?type=album&market=PL&query=${this.defaultSearchValue}`;

    constructor(private actions: Actions,
                private http: HttpClient) {}

    @Effect()
    $fetchAlbums = this.actions
        .pipe(
            ofType<SearchAlbum>(MusicSearchActionType.searchAlbum),
            map(action => action.payload),
            switchMap(() => {
                return this.http.get(this.url)
                    .pipe(map((response: any) => {
                        console.log('response', response);
                        return new FetchAlbums(response.albums);
                    }));
            })
        );
}
