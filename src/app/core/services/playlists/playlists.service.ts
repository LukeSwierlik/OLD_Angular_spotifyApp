import {Injectable} from '@angular/core';
import IPlaylist from '../../../shared/interface/playlist.interface';
import {HttpClient} from '@angular/common/http';
import {map, startWith} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlaylistsService {

    private playlists: IPlaylist[] = [];
    private server_url = 'http://localhost:3000/playlists/';
    private playlistsStream$ = new Subject<IPlaylist[]>();

    constructor(private http: HttpClient) {
    }

    public savePlaylist(playlist: IPlaylist) {
        let request;

        if (playlist.id) {
            request = this.http
                .put(`${this.server_url}${playlist.id}`, playlist);
        } else {
            request = this.http
                .post(this.server_url, playlist);
        }

        return request.pipe(
            map(() => {
                this.getPlaylists();
            })
        );
    }

    public createPlaylist(): IPlaylist {
        return {
            id: 0,
            name: '',
            tracks: [],
            color: '#FF0000',
            favourite: false
        };
    }

    public getPlaylists() {
        return this.http
            .get(this.server_url)
            .subscribe((playlists: IPlaylist[]) => {
                this.playlists = playlists;
                this.playlistsStream$.next(this.playlists);
            });
    }

    getPlaylistsStream() {
        if (!this.playlists.length) {
            this.getPlaylists();
        }

        return this.playlistsStream$
            .pipe(startWith(this.playlists));
    }

    getPlaylist(id) {
        return this.http
            .get(`${this.server_url}${id}`);
    }
}
