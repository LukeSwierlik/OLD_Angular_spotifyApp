import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import IPlaylist from '../../../../shared/interface/playlist.interface';

@Component({
    selector: 'app-playlists-list',
    templateUrl: './playlists-list.component.html',
    styleUrls: ['./playlists-list.component.css']
})
export class PlaylistsListComponent implements OnInit {

    @Input()
    public playlists: Array<IPlaylist>;

    @Input()
    public selected: IPlaylist;

    @Output('selectPlaylist')
    onSelected = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    select(playlist) {
        this.onSelected.emit(playlist);
    }

}
