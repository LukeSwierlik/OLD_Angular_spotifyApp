import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-playlist-form',
    templateUrl: './playlist-form.component.html',
    styleUrls: ['./playlist-form.component.css']
})
export class PlaylistFormComponent implements OnInit {

    @Input()
    playlist;

    @Output('saved')
    onSave = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    save(playlist) {
        this.onSave.emit(playlist);
    }
}
