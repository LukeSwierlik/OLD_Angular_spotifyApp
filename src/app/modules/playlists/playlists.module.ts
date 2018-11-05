import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {PlaylistsComponent} from './containers/playlists/playlists.component';
import {ContentCardComponent} from './components/content-card/content-card.component';
import {PlaylistsListComponent} from './components/playlists-list/playlists-list.component';
import {PlaylistFormComponent} from './components/playlist-form/playlist-form.component';
import {PlaylistDetailComponent} from './components/playlist-detail/playlist-detail.component';

import PlaylistsMock from '../../core/mocks/playlistsMock';
import {routerModule} from './playlists.routing';
import {MusicSharedModule} from '../../shared/modules/music-shared/music-shared.module';
import {SectionTitleComponent} from '../../shared/modules/music-shared/components/section-title/section-title.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routerModule,
        MusicSharedModule
    ],
    declarations: [
        PlaylistsComponent,
        ContentCardComponent,
        PlaylistsListComponent,
        PlaylistFormComponent,
        PlaylistDetailComponent
    ],
    exports: [
        PlaylistsComponent
    ]
})
export class PlaylistsModule {
}
