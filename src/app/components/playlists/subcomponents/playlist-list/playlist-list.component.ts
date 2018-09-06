import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlaylistsService, Playlist } from '../../service/playlists.service';
import { Subject, Observable } from 'rxjs';

@Component({
    selector: 'playlist-list',
    templateUrl: './playlist-list.component.html',
    styleUrls: ['./playlist-list.component.css']
})


export class PlaylistListComponent implements OnInit {

    playlists = [];
  
    constructor(private playlistService: PlaylistsService) { }
  
    ngOnInit() {
        this.playlistService.getPlaylistsStream()
            .subscribe((playlists: Playlist[]) => {
                this.playlists = playlists;
            })
    }
}
