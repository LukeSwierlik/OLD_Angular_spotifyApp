import {Injectable} from '@angular/core';
import {PlaylistsService} from '../playlists/playlists.service';
import {Subject} from 'rxjs';
import {startWith} from 'rxjs/operators';
import ITrack from '../../../shared/interface/track.interface';
import IPlaylist from '../../../shared/interface/playlist.interface';

@Injectable({
    providedIn: 'root'
})
export class PlaylistSelectionService {

    selectedId = 1;
    selectionIdStream$ = new Subject();

    constructor(private playlistsService: PlaylistsService) {
        this.playlistsService
            .getPlaylistsStream()
            .subscribe((playlists: Array<IPlaylist>) => {
                if (this.selectedId && playlists[0]) {
                   this.select(playlists[0].id);
                }
            });
    }

    addToPlaylist(track: ITrack): void {
        this.playlistsService.addToPlaylist(this.selectedId, track);
    }

    select(playlistId: number): void {
        this.selectedId = playlistId;
        this.selectionIdStream$.next(this.selectedId);
    }

    getSelectionStream() {
        return this.selectionIdStream$
            .pipe(startWith(this.selectedId));
    }
}
