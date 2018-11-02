import {Injectable} from '@angular/core';
import IAlbum from '../../../shared/interface/album.interface';
import {HttpClient} from '@angular/common/http';
import {startWith, map} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MusicSearchService {
    private albums: Array<IAlbum> = [];
    private albumsStream$ = new Subject();

    constructor(private http: HttpClient) {
        this.search('batman');
    }

    public search(query: String) {
        const url = `https://api.spotify.com/v1/search?type=album&market=PL&query=${query}`;

        this.http.get(url)
            .pipe(map((response: any) => {
                return response.albums.items;
            }))
            .subscribe(albums => {
                this.albums = albums;
                this.albumsStream$.next(this.albums);
            });
    }

    public getAlbumsStream(): Observable<Array<IAlbum>> {
        return this.albumsStream$
            .pipe(startWith(this.albums));
    }

    public getAlbum(id: String): Observable<Array<IAlbum>> {
        const url = `https://api.spotify.com/v1/albums/${id}`;

        return this.http.get(url)
            .pipe(map((response: any) => response));
    }
}
