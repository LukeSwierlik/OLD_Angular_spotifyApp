import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-track-list',
    templateUrl: './track-list.component.html'
})
export class TrackListComponent implements OnInit {

    @Input()
    tracks

    constructor() {
    }

    ngOnInit() {
    }

    play(audio, track) {
        if (audio.src !== track.preview_url) {
            audio.src = track.preview_url;
            audio.play();
        } else if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
}
