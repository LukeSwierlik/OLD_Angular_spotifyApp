import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import IPlaylist from '../../../../shared/interface/playlist.interface';
import {PlaylistsService} from '../../../../core/services/playlists/playlists.service';

@Component({
    selector: 'app-playlists-list',
    templateUrl: './playlists-list.component.html',
    styleUrls: ['./playlists-list.component.css']
})
export class PlaylistsListComponent implements OnInit {

    protected playlists = [];

    constructor(private playlistService: PlaylistsService) {
    }

    ngOnInit() {
        this.playlistService
            .getPlaylistsStream()
            .subscribe((playlists: IPlaylist[]) => {
                this.playlists = playlists;
            });
    }
}
