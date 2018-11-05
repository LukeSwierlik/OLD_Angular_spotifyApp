import {Component} from '@angular/core';
import Navigation from '../../../../shared/enums/navigation.enum';

@Component({
    selector: 'app-music-search',
    templateUrl: './music-search.component.html',
    styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent {

    protected readonly sectionTitle = Navigation.SEARCH_MUSIC;

    constructor() {
    }
}
