import {Injectable} from '@angular/core';
import IAlbum from '../../../shared/interface/album.interface';
import {Http, Response} from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class MusicSearchService {
    albums: Array<IAlbum> = [];

    constructor(private http: Http) {
    }

    search(query, callback) {
        const url = `https://api.spotify.com/v1/search?type=album&market=PL&query=${query}`;

        this.http.get(url)
            .subscribe((response: Response) => {
               const data = response.json();
               const albums = data.albums.items;

               this.albums = albums;

               callback(albums);
            });
    }

    getAlbums(callback) {
        const query = 'batman';

        this.search(query, callback);
    }
}
