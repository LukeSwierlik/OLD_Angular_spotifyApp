import {Inject, Injectable, Optional} from '@angular/core';
import IPlaylist from '../../../shared/interface/playlist.interface';

@Injectable({
    providedIn: 'root'
})
export class PlaylistsService {

    playlists: Array<IPlaylist> = [];

    constructor(@Optional() @Inject('PlaylistsMock') playlistsMock) {
        this.playlists = playlistsMock === null ? this.playlists : playlistsMock;
    }

    savePlaylist(playlist: IPlaylist) {
        if (playlist.id) {
            const index = this.playlists.findIndex((old_playlist) => old_playlist.id === playlist.id);

            this.playlists.splice(index, 1, playlist);
        } else {
            playlist.id = Date.now();
            this.playlists.push(playlist);
        }
    }

    createPlaylist() {
        const newPlaylist = {
            id: 0,
            name: '',
            tracks: 0,
            color: '#FF0000',
            favourite: false
        };

        return Object.assign({}, newPlaylist);
    }

    getPlaylists() {
        return this.playlists;
    }
}
