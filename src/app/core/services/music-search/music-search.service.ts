import { Injectable } from '@angular/core';
import IAlbum from '../../../shared/interface/album.interface';
import { HttpClient } from '@angular/common/http';
import { startWith, map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MusicSearchService {
    private albums: Array<IAlbum>;
    private readonly albumsStream$ = new Subject();
    private readonly defaultSearchValue = 'Batman';

    constructor(private http: HttpClient) {
        this.search(this.defaultSearchValue);
    }

    public search(query: string) {
        const url = `https://api.spotify.com/v1/search?type=album&market=PL&query=${query}`;

        this.http.get(url)
            .pipe(map((response: any) => {
                return response.albums.items;
            }))
            .subscribe((albums: Array<IAlbum>) => {
                this.albums = albums;
                this.albumsStream$.next(this.albums);
            });
    }

    public getAlbumsStream(): Observable<any> {
        return this.albumsStream$
            .pipe(startWith(this.albums));
    }

    public getAlbum(id: String): Observable<any> {
        const url = `https://api.spotify.com/v1/albums/${id}`;

        return this.http.get(url)
            .pipe(map((response: any) => response));
    }
}
