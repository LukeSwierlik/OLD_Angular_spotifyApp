import { Injectable } from '@angular/core';
import { PlaylistsService } from '../playlists/service/playlists.service';
import { Subject } from 'rxjs';

@Injectable()
export class PlaylistSelectionService {

    selectedId;
    selectedIdStream = new Subject();

    constructor(private playlistsService: PlaylistsService) { 
        this.playlistsService.getPlaylistsStream()
            .subscribe(playlists => {
                if(!this.selectedId){
                    this.select(playlists[0]);
                }
            });
    }

    addToPlaylist(track) {
        this.playlistsService.addToPlaylist(this.selectedId, track);
    }

    select(playlistId){
        this.selectedId = playlistId;
        this.selectedIdStream.next(this.selectedId);
    }

    getSelectionStream(){
        return this.selectedIdStream.startWith(this.selectedId);
    }
}
