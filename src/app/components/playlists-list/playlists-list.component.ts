import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-playlists-list',
    templateUrl: './playlists-list.component.html',
    styleUrls: ['./playlists-list.component.css']
})
export class PlaylistsListComponent implements OnInit {

    @Input()
    playlists;

    @Input()
    selected;

    @Output('select')
    onSelected = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    select(playlist) {
        this.onSelected.emit(playlist);
    }

}
