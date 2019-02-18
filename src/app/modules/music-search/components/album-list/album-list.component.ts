import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MusicSearchService} from '../../../../core/services/music-search/music-search.service';
import {Observable} from 'rxjs';
import IAlbum from '../../../../shared/interface/album.interface';

@Component({
    selector: 'app-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit, OnChanges {
    @Input()
    musicSearchAlbums$: Observable<Array<IAlbum>>;

    protected albums$: Observable<Array<IAlbum>>;

    constructor(private musicSearchService: MusicSearchService) {
    }

    ngOnInit() {
        // this.albums$ = this.musicSearchService.getAlbumsStream();
        // console.log('musicSearchAlbums =======', this.musicSearchAlbums$);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('musicSearchAlbums =======', this.musicSearchAlbums$);
    }
}
