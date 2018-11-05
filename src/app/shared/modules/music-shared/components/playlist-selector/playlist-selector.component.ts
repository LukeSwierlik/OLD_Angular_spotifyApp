import {Component, OnInit} from '@angular/core';
import {PlaylistSelectionService} from '../../../../../core/services/playlist-selection/playlist-selection.service';
import {PlaylistsService} from '../../../../../core/services/playlists/playlists.service';
import IPlaylist from '../../../../interface/playlist.interface';

@Component({
    selector: 'app-playlist-selector',
    templateUrl: './playlist-selector.component.html',
    styleUrls: ['./playlist-selector.component.css']
})
export class PlaylistSelectorComponent implements OnInit {

    selectedId: number;
    playlists: Array<IPlaylist> = [];

    constructor(private playlistSelectionService: PlaylistSelectionService,
                private playlistsService: PlaylistsService) {
    }

    ngOnInit() {
        this.playlistSelectionService
            .getSelectionStream()
            .subscribe((id: number) => {
                this.selectedId = id;
            });

        this.playlistsService
            .getPlaylistsStream()
            .subscribe((playlists: Array<IPlaylist>) => {
                this.playlists = playlists;
            });
    }

    setSelected(option_id: string): void {
        const playlistId = parseInt(option_id, 10);

        this.playlistSelectionService.select(playlistId);
    }
}
