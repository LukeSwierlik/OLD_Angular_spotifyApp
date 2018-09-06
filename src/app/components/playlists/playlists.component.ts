import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from './service/playlists.service';

import playlistsData from './data/playlists.data';

@Component({
    selector: 'playlists',
    templateUrl: './playlists.component.html',
    styleUrls: ['./playlists.component.css']
})


export class PlaylistsComponent implements OnInit {

    constructor(private playlistsService: PlaylistsService) { }

    ngOnInit() {
    }
}
