import { Component, OnInit, Input } from '@angular/core';
import { PlaylistSelectionService } from '../../../music-shared/playlist-selection.service';

@Component({
    selector: 'track-list',
    templateUrl: './track-list.component.html',
    styleUrls: ['./track-list.component.css']
})

export class TrackListComponent implements OnInit {

    @Input()
    tracks;

    constructor(private selectionService: PlaylistSelectionService) { }

    ngOnInit() {
    }

    play(audio_id, track) {
        audio_id.volume = 0.5;

        if(audio_id.src != track.preview_url){
            audio_id.src = track.preview_url;
            audio_id.play();
        }
        else if(audio_id.paused){
            audio_id.play();
        }
        else{
            audio_id.pause();
        }
    }

    addToPlaylist(track){
        this.selectionService.addToPlaylist(track);
    }
}
