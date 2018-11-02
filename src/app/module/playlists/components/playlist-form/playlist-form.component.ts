import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import IPlaylist from '../../../../shared/interface/playlist.interface';

@Component({
    selector: 'app-playlist-form',
    templateUrl: './playlist-form.component.html',
    styleUrls: ['./playlist-form.component.css']
})
export class PlaylistFormComponent implements OnInit {

    @Input()
    private playlist: IPlaylist;

    @Output('saved')
    private onSave = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    public save(playlist) {
        this.onSave.emit(playlist);
    }
}
