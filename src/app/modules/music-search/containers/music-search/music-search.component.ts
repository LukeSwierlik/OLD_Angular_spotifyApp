import { Component, OnInit } from '@angular/core';
import Navigation from '../../../../shared/enums/navigation.enum';
import { MusicSearchFacade } from '../../../../ngRxUtility/music-search/music-search.facade';

@Component({
    selector: 'app-music-search',
    templateUrl: './music-search.component.html',
    styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent implements OnInit {

    protected readonly sectionTitle = Navigation.SEARCH_MUSIC;

    constructor(private musicSearchFacade: MusicSearchFacade) {
    }

    ngOnInit(): void {
        this.musicSearchFacade.getAlbums('Batman');
    }
}

