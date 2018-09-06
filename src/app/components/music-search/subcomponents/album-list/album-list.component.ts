import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from '../../service/music-search.service';

@Component({
    selector: 'album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

    albums;

    constructor(private musicSearch: MusicSearchService) { }

    ngOnInit() {
        this.albums = this.musicSearch.getAlbumsStream();
    }

}
