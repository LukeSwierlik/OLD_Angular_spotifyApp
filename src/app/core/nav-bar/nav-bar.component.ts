import {Component} from '@angular/core';
import Navigation from '../../shared/enums/navigation.enum';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

    protected routing = [
        {
            path: '/music',
            name: Navigation.SEARCH_MUSIC
        },
        {
            path: '/playlist',
            name: Navigation.PLAYLISTS
        }
    ];

    constructor() {
    }
}
