import {Component, OnInit} from '@angular/core';
import IPlaylist from '../../../../shared/interface/playlist.interface';
import {PlaylistsService} from '../../../../core/services/playlists/playlists.service';

@Component({
    selector: 'app-playlists',
    templateUrl: './playlists.component.html'
})
export class PlaylistsComponent implements OnInit {

    selectedPlaylist: IPlaylist = null;
    editedPlaylist: IPlaylist = null;
    mode: String = 'none';
    playlists: Array<IPlaylist> = [];

    constructor(private playlistsServices: PlaylistsService) {
    }

    ngOnInit() {
        this.playlists = this.playlistsServices.getPlaylists();
    }

    select(playlist: IPlaylist) {
        if (playlist !== this.selectedPlaylist) {
            this.mode = 'selected';
            this.selectedPlaylist = playlist;
        }
    }

    edit(playlist: IPlaylist) {
        this.mode = 'edit';
        this.editedPlaylist = Object.assign({}, playlist);
        this.selectedPlaylist = playlist;
    }

    createNew() {
        const newPlaylist = this.playlistsServices.createPlaylist();

        this.mode = 'new';
        this.editedPlaylist = newPlaylist;
        this.selectedPlaylist = newPlaylist;
    }

    save(playlist: IPlaylist) {
        this.playlistsServices.savePlaylist(playlist);
    }

}
