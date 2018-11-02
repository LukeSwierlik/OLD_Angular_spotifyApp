import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import IPlaylist from '../../../../shared/interface/playlist.interface';

@Component({
    selector: 'app-playlist-detail',
    templateUrl: './playlist-detail.component.html'
})
export class PlaylistDetailComponent implements OnInit {

    @Input()
    private playlist: IPlaylist;

    @Output('editPlaylist')
    private editEmitter = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    edit(playlist) {
        this.editEmitter.emit(playlist);
    }
}
