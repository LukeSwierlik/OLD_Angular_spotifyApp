import { RouterModule, Routes } from '@angular/router';
import {MusicSearchComponent} from './containers/music-search/music-search.component';
import {AlbumDetailsComponent} from './components/album-details/album-details.component';

const routesConfig: Routes = [
    {
        path: 'music',
        component: MusicSearchComponent
    },
    {
        path: 'music/album/:album_id',
        component: AlbumDetailsComponent
    },
];

export const routerModule = RouterModule.forChild(routesConfig);
