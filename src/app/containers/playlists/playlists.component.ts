import {Component, OnInit} from '@angular/core';
import IPlaylist from '../../shared/interface/playlist.interface';
import playlistMock from '../../__mock__/playlistsMock';

@Component({
    selector: 'app-playlists',
    templateUrl: './playlists.component.html'
})
export class PlaylistsComponent implements OnInit {

    selected = null;
    edited = {};
    mode = 'none';
    playlists = playlistMock;

    constructor() {
    }

    ngOnInit() {
    }

    select(playlist: IPlaylist) {
        if (playlist !== this.selected) {
            this.mode = 'selected';
            this.selected = playlist;
        }
    }

    edit(playlist: IPlaylist) {
        this.mode = 'edit';
        this.edited = Object.assign({}, playlist);
        this.selected = playlist;
    }

    createNew() {
        this.mode = 'new';
        const newPlaylist = {
            name: '',
            tracks: 0,
            color: '#FF0000',
            favourite: false
        };

        this.edited = Object.assign({}, newPlaylist);
        this.selected = newPlaylist;
    }

    save(playlist: IPlaylist) {
        console.log('save', playlist);

        if (playlist.id) {
            const index = this.playlists
                .findIndex((old_playlist: IPlaylist) => old_playlist.id === playlist.id);

            this.playlists.splice(index, 1, playlist);
        } else {
            playlist.id = Date.now();
            this.playlists.push(playlist);
        }
    }

}
