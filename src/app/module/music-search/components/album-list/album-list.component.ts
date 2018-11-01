import {Component, OnInit} from '@angular/core';
import IAlbum from '../../../../shared/interface/album.interface';
import {MusicSearchService} from '../../../../core/services/music-search/music-search.service';

@Component({
    selector: 'app-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
    albums: Array<IAlbum>;

    constructor(private musicSearchService: MusicSearchService) {
    }

    ngOnInit() {
        this.musicSearchService.getAlbums(albums => {
            this.albums = albums;
        });
    }
}
