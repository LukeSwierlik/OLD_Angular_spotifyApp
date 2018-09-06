import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from '../playlists.component';
import { PlaylistDetailComponent } from '../subcomponents/playlist-detail/playlist-detail.component';
import { PlaylistFormComponent } from '../subcomponents/playlist-form/playlist-form.component';

const routesConfig: Routes = [
    {
        path: 'playlist',
        component: PlaylistsComponent,
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
            }
        ]
    }
];

export const routerModule = RouterModule.forChild(routesConfig);