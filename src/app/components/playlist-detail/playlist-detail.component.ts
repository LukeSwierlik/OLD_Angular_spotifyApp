import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-playlist-detail',
    templateUrl: './playlist-detail.component.html'
})
export class PlaylistDetailComponent implements OnInit {

    @Input()
    playlist;

    @Output('editPlaylist')
    editEmitter = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    edit(playlist) {
        this.editEmitter.emit(playlist);
    }
}
