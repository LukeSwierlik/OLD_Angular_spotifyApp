import {RouterModule, Routes} from '@angular/router';
import {PlaylistsComponent} from './containers/playlists/playlists.component';
import {PlaylistDetailComponent} from './components/playlist-detail/playlist-detail.component';
import {PlaylistFormComponent} from './components/playlist-form/playlist-form.component';

const routesConfig: Routes = [
    {
        path: 'playlist',
        component: PlaylistsComponent,
        data: {
            title: 'Playlists'
        },
        children: [
            {
                path: '',
                component: PlaylistDetailComponent
            },
            {
                path: 'new',
                component: PlaylistFormComponent
            },
            {
                path: ':id',
                component: PlaylistDetailComponent
            },
            {
                path: ':id/edit',
                component: PlaylistFormComponent
            },
        ]
    },

];

export const routerModule = RouterModule.forChild(routesConfig);
