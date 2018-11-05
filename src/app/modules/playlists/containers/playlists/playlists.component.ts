import {Component} from '@angular/core';
import Navigation from '../../../../shared/enums/navigation.enum';

@Component({
    selector: 'app-playlists',
    templateUrl: './playlists.component.html'
})
export class PlaylistsComponent {

    protected readonly sectionTitle = Navigation.PLAYLISTS;

    constructor() {
    }
}
