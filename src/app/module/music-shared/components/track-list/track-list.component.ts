import {Component, Input} from '@angular/core';
import {PlaylistSelectionService} from '../../../../core/services/playlist-selection/playlist-selection.service';
import ITrack from '../../../../shared/interface/track.interface';

@Component({
    selector: 'app-track-list',
    templateUrl: './track-list.component.html'
})
export class TrackListComponent {

    @Input()
    tracks: Array<ITrack>;

    constructor(private playlistSelectionService: PlaylistSelectionService) {
    }

    protected play(audioRef: HTMLAudioElement, track: ITrack): void  {
        if (audioRef.src !== track.preview_url) {
            audioRef.src = track.preview_url;

            audioRef.play();
        } else if (audioRef.paused) {
            audioRef.play();
        } else {
            audioRef.pause();
        }
    }

    protected addToPlaylist(track: ITrack): void {
        this.playlistSelectionService.addToPlaylist(track);
    }
}
