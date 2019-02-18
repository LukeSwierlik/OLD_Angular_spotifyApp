import { Component, OnInit } from '@angular/core';
import Navigation from '../../../../shared/enums/navigation.enum';
import { MusicSearchFacade } from '../../../../ngRxUtility/music-search/music-search.facade';
import {Observable} from 'rxjs';
import IAlbum from '../../../../shared/interface/album.interface';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-music-search',
    templateUrl: './music-search.component.html',
    styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent implements OnInit {

    protected readonly sectionTitle = Navigation.SEARCH_MUSIC;

    public chuj$: Observable<IAlbum[]>;

    constructor(private musicSearchFacade: MusicSearchFacade) {
    }

    ngOnInit(): void {
        this.musicSearchFacade.getAlbums('Batman');
        this.chuj$ = this.musicSearchFacade.albums$
            .pipe(map(item => {
                console.log('item', item);
                return item;
            }));
    }
}

