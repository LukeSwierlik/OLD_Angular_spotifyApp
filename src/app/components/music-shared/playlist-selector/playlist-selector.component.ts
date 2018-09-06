import { Component, OnInit } from '@angular/core';
import { PlaylistSelectionService } from '../playlist-selection.service';

import { PlaylistsService } from '../../playlists/service/playlists.service';

@Component({
    selector: 'playlist-selector',
    templateUrl: './playlist-selector.component.html',
    styleUrls: ['./playlist-selector.component.css']
})
export class PlaylistSelectorComponent implements OnInit {

    selectedId;
    playlists = [];

    constructor(private selectionService: PlaylistSelectionService, private playlistsService: PlaylistsService) { }

    ngOnInit() {
        this.selectionService.getSelectionStream()
            .subscribe(id => {
                this.selectedId = id;
            });

        this.playlistsService.getPlaylistsStream()
            .subscribe(playlists => {
                this.playlists = playlists;
            });
    }

    setSelected(id){
        this.selectionService.select(id);
    }
}
